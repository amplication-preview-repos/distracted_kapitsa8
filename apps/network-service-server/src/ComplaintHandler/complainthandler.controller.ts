import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ComplaintHandlerService } from "./complainthandler.service";
import { ComplaintInputDto } from "../complaintHandler/ComplaintInputDto";

@swagger.ApiTags("complaintHandlers")
@common.Controller("complaintHandlers")
export class ComplaintHandlerController {
  constructor(protected readonly service: ComplaintHandlerService) {}

  @common.Post("/notify-complaint")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async NotifyComplaint(
    @common.Body()
    body: ComplaintInputDto
  ): Promise<string> {
        return this.service.NotifyComplaint(body);
      }
}
