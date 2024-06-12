import { Module } from "@nestjs/common";
import { HelloWorldModuleService } from "./helloworldmodule.service";
import { HelloWorldModuleController } from "./helloworldmodule.controller";
import { HelloWorldModuleResolver } from "./helloworldmodule.resolver";

@Module({
  controllers: [HelloWorldModuleController],
  providers: [HelloWorldModuleService, HelloWorldModuleResolver],
  exports: [HelloWorldModuleService],
})
export class HelloWorldModuleModule {}
