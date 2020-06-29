import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Autor } from 'src/autor/autor';
import { AutorService } from 'src/autor/autor.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AutorParams } from 'src/autor/autor.params';


@ApiTags('autores')
@Controller({path: '/autores'})
@ApiBearerAuth()
export class AutorController {
  constructor(
    private autorService: AutorService
  ) {}

  @ApiCreatedResponse({
    description: 'Lista de autores com base nos parâmetros',
    type: Autor
  })
  @Get('')
  async listar(@Query() autorParams: AutorParams) {
    const page = autorParams.page;
    return await this.autorService.listar(autorParams)
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
  async salvar(@Body() autor: Autor) {
    return await this.autorService.salvar(autor);
  }

  @ApiCreatedResponse({
    description: 'Obter autor pelo identificador',
    type: Autor,
  })

  @Get('/obter/:id')

  obter(): Autor {
    return {
      idAutor: 1,
      noAutor: 'Teste pull request',
      stAtivo: true
    }
  }
}
