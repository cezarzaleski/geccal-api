import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AutorEntity } from 'src/entity/autor.entity';
import { AutorService } from 'src/services/autor.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AutorParams } from 'src/controllers/autor.params';


@ApiTags('autores')
@Controller({path: '/autores'})
export class AutorController {
  constructor(
    private autorService: AutorService
  ) {}

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
  async salvar(@Body() autor: AutorEntity) {
    return await this.autorService.salvar(autor);
  }

  @ApiCreatedResponse({
    description: 'Obter autor pelo identificador',
    type: AutorEntity,
  })

  @Get('/obter/:id')

  obter(): AutorEntity {
    return {
      idAutor: 1,
      noAutor: 'Teste',
      stAtivo: true
    }
  }
}
