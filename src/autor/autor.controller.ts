import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Autor } from 'src/autor/autor';
import { AutorService } from 'src/autor/autor.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AutorParams } from 'src/autor/autor.params';
import { JwtAuthGuard } from 'src/autenticacao/jwt-auth.guard';


@ApiTags('autores')
@Controller({path: '/autores'})
@ApiBearerAuth()
export class AutorController {
  constructor(
    private autorService: AutorService
  ) {}

  @ApiCreatedResponse({
    description: 'Lista de autores com base nos parâmetros',
    type: Autor,
    isArray: true,
    status: HttpStatus.OK
  })
  @Get('')
  @UseGuards(JwtAuthGuard)
  listar(@Query() autorParams: AutorParams) {
    const page = autorParams.page;
    return this.autorService.listar(autorParams)
      .then(([autores, total]) => {
        return {
          data: autores,
          page: page,
          count: autores.length,
          total: total
        };
      });
  }

  @Post('')
  @UseGuards(JwtAuthGuard)
  async salvar(@Body() autor: Autor) {
    return await this.autorService.salvar(autor);
  }

  @ApiCreatedResponse({
    description: 'Obter autor pelo identificador',
    type: Autor,
    status: HttpStatus.OK
  })
  @UseGuards(JwtAuthGuard)
  @Get('/:idAutor')
  obter(@Param('idAutor') idAutor: number) {
    return this.autorService.obter(idAutor);
  }

  @ApiCreatedResponse({
    description: 'Excluir autores logicamente',
    type: Autor,
    isArray: true,
    status: HttpStatus.OK
  })
  @Delete('/:idAutor')
  @UseGuards(JwtAuthGuard)
  excluir(@Param('idAutor') idAutor: number) {
    return this.autorService.excluir(idAutor);
  }

  @ApiCreatedResponse({
    description: 'Excluir autores logicamente',
    type: Autor,
    isArray: true,
    status: HttpStatus.OK
  })
  @Put('/:idAutor')
  @UseGuards(JwtAuthGuard)
  atualizar(@Param('idAutor') idAutor: number, @Body() autor: Autor) {
    return this.autorService.atualizar(autor, idAutor);
  }
}
