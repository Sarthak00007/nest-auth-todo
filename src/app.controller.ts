import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request, @Res() res: Response) {
    return this.appService.getHello(request, res);
  }

  @Get()
  getHelloWorld() {
    return 'Hello World!';
  }

  @Post()
  getHelloPost(@Req() request: Request, @Res() res: Response) {
    return this.appService.getHello(request, res);
  }
}
