import { Controller, Get, Query, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version('v1')
  getHello(@Query('old_example') example: string): string {
    return example;
  }

  @Get()
  @Version('v2')
  getHelloV2(@Query('example') example: string): string {
    return example;
  }
}
