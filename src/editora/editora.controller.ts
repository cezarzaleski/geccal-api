import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/autenticacao/jwt-auth.guard';
import { EditoraService } from 'src/editora/editora.service';
import { EditoraParams } from 'src/editora/editora.params';
import { Editora } from 'src/editora/editora';
import { SituacaoEnum } from 'src/enums/situacao.enum';


@ApiTags('editoras')
@Controller({path: '/editoras'})
@ApiBearerAuth()
export class EditoraController {
  constructor(
    private editoraService: EditoraService
  ) {}

  @ApiCreatedResponse({
    description: 'Listar editoras',
    type: Editora,
    isArray: true,
    status: HttpStatus.OK
  })
  @Get('')
  @UseGuards(JwtAuthGuard)
  listar(@Query() editoraParams: EditoraParams) {
    const page = editoraParams.page;
    // delete editoraParams.situacao;
    return this.editoraService.listar(editoraParams)
      .then(([editoras, total]) => {
        return {
          data: editoras,
          page: page,
          count: editoras.length,
          total: total
        };
      });
  }

  @Post('')
  @UseGuards(JwtAuthGuard)
  async salvar(@Body() editora: Editora) {
    return await this.editoraService.salvar(editora);
  }

  @ApiCreatedResponse({
    description: 'Obter editora',
    type: Editora,
    status: HttpStatus.OK
  })
  @UseGuards(JwtAuthGuard)
  @Get('/:idEditora')
  obter(@Param('idEditora') idEditora: number) {
    return this.editoraService.obter(idEditora);
  }

  @ApiCreatedResponse({
    description: 'Excluir editora logicamente',
    type: Editora,
    isArray: true,
    status: HttpStatus.OK
  })
  @Delete('/:idEditora')
  @UseGuards(JwtAuthGuard)
  excluir(@Param('idEditora') idEditora: number) {
    return this.editoraService.excluir(idEditora);
  }

  @ApiCreatedResponse({
    description: 'Atualizar editora',
    type: Editora,
    isArray: true,
    status: HttpStatus.OK
  })
  @Put('/:idEditora')
  @UseGuards(JwtAuthGuard)
  atualizar(@Param('idEditora') idEditora: number, @Body() editora: Editora) {
    return this.editoraService.atualizar(editora, idEditora);
  }
}
