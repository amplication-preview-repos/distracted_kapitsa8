import * as graphql from "@nestjs/graphql";
import { ComplaintInputDto } from "../complaintHandler/ComplaintInputDto";
import { ComplaintHandlerService } from "./complainthandler.service";

export class ComplaintHandlerResolver {
  constructor(protected readonly service: ComplaintHandlerService) {}

  @graphql.Mutation(() => String)
  async NotifyComplaint(
    @graphql.Args()
    args: ComplaintInputDto
  ): Promise<string> {
    return this.service.NotifyComplaint(args);
  }
}
