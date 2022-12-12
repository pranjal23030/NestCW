import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckLoginDto } from './checkLogin.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/product') 
  getproduct(): string{
    return this.appService.getproduct(); 
  }

  @Get('/users')
  getusers(): string{
    return this.appService.getusers();
  }

  @Post('/login')
  checkLogin(@Body() checkLogin:CheckLoginDto) {
    return this.appService.checkLogin(checkLogin);
  }

}
