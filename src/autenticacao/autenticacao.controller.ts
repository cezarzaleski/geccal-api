import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/autenticacao/local-auth.guard';
import { AutenticacaoService } from 'src/autenticacao/autenticacao.service';
import { Login } from 'src/autenticacao/login';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Autor } from 'src/autor/autor';

@ApiTags('autenticacao')
@Controller({path: '/autenticacao'})
export class AutenticacaoController {


  constructor(
    private readonly autenticacaoService: AutenticacaoService
  ) {}

  @ApiCreatedResponse({
    description: 'Realizar autenticação de usuário',
    type: Autor,
    status: HttpStatus.CREATED
  })
  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Body() login: Login) {
    return this.autenticacaoService.login(login);
  }
}
