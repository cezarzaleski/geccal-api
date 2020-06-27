import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/services/app.service';
import { Livro } from 'src/interface/livro.iterface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Livro {
    return this.appService.getHello();
  }
}
