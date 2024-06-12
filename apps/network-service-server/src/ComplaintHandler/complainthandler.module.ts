import { Module } from "@nestjs/common";
import { ComplaintHandlerService } from "./complainthandler.service";
import { ComplaintHandlerController } from "./complainthandler.controller";
import { ComplaintHandlerResolver } from "./complainthandler.resolver";

@Module({
  controllers: [ComplaintHandlerController],
  providers: [ComplaintHandlerService, ComplaintHandlerResolver],
  exports: [ComplaintHandlerService],
})
export class ComplaintHandlerModule {}
