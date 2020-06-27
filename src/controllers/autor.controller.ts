import { Controller, Get, Query } from '@nestjs/common';
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
    return await this.autorService.findAll(autorParams)
      .then(([autores, total]) => {
        return {
          data: autores,
          page: page,
          count: autores.length,
          total: total
        };
      });
  }

  @ApiCreatedResponse({
    description: 'Obter autor.',
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
