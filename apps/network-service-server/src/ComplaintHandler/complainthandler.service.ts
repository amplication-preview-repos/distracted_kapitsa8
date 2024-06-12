import { Injectable } from "@nestjs/common";
import { ComplaintInputDto } from "../complaintHandler/ComplaintInputDto";

@Injectable()
export class ComplaintHandlerService {
  constructor() {}
  async NotifyComplaint(args: ComplaintInputDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
