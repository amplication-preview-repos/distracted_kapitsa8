import { Injectable } from "@nestjs/common";

@Injectable()
export class HelloWorldModuleService {
  constructor() {}
  async SayHello(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
