import * as graphql from "@nestjs/graphql";
import { HelloWorldModuleService } from "./helloworldmodule.service";

export class HelloWorldModuleResolver {
  constructor(protected readonly service: HelloWorldModuleService) {}

  @graphql.Query(() => String)
  async SayHello(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SayHello(args);
  }
}
