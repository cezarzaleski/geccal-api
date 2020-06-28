import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from 'src/services/app.service';
import { Livro } from 'src/interface/livro.iterface';
import { LocalAuthGuard } from 'src/autenticacao/local-auth.guard';
import { AutenticacaoService } from 'src/autenticacao/autenticacao.service';
import { JwtAuthGuard } from 'src/autenticacao/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly autenticacaoService: AutenticacaoService
  ) {}

  @Get()
  getHello(): Livro {
    return this.appService.getHello();
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.autenticacaoService.login(req.user);
  // }
  //
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
