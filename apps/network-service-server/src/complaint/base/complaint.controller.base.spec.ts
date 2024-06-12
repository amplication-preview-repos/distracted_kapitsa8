import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ComplaintController } from "../complaint.controller";
import { ComplaintService } from "../complaint.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  complaintCreationTime: new Date(),
  createdAt: new Date(),
  creationTime: new Date(),
  creationTimestamp: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  complaintCreationTime: new Date(),
  createdAt: new Date(),
  creationTime: new Date(),
  creationTimestamp: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    complaintCreationTime: new Date(),
    createdAt: new Date(),
    creationTime: new Date(),
    creationTimestamp: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  complaintCreationTime: new Date(),
  createdAt: new Date(),
  creationTime: new Date(),
  creationTimestamp: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createComplaint() {
    return CREATE_RESULT;
  },
  complaints: () => FIND_MANY_RESULT,
  complaint: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Complaint", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ComplaintService,
          useValue: service,
        },
      ],
      controllers: [ComplaintController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /complaints", async () => {
    await request(app.getHttpServer())
      .post("/complaints")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        complaintCreationTime:
          CREATE_RESULT.complaintCreationTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationTime: CREATE_RESULT.creationTime.toISOString(),
        creationTimestamp: CREATE_RESULT.creationTimestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /complaints", async () => {
    await request(app.getHttpServer())
      .get("/complaints")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          complaintCreationTime:
            FIND_MANY_RESULT[0].complaintCreationTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creationTime: FIND_MANY_RESULT[0].creationTime.toISOString(),
          creationTimestamp:
            FIND_MANY_RESULT[0].creationTimestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /complaints/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/complaints"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /complaints/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/complaints"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        complaintCreationTime:
          FIND_ONE_RESULT.complaintCreationTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creationTime: FIND_ONE_RESULT.creationTime.toISOString(),
        creationTimestamp: FIND_ONE_RESULT.creationTimestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /complaints existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/complaints")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        complaintCreationTime:
          CREATE_RESULT.complaintCreationTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationTime: CREATE_RESULT.creationTime.toISOString(),
        creationTimestamp: CREATE_RESULT.creationTimestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/complaints")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
