import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { HelloWorldModuleService } from "./helloworldmodule.service";

@swagger.ApiTags("helloWorldModules")
@common.Controller("helloWorldModules")
export class HelloWorldModuleController {
  constructor(protected readonly service: HelloWorldModuleService) {}

  @common.Get("/hello")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SayHello(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SayHello(body);
      }
}
