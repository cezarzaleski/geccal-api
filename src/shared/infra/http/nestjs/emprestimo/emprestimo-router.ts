import { Body, Controller, HttpStatus, Inject, Post, Res } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { adaptNestJSResolver } from 'src/shared/infra/http/nestjs/nestjs-router'
import EmprestimoController from 'src/emprestimo/infra/controller/emprestimo-controller'
import AbstractRepositoryFactory from 'src/shared/domain/factory/abstract-repository-factory'
import { EmprestarLivroInput } from 'src/shared/infra/http/nestjs/emprestimo/input/emprestar-livro-input'

@Controller('emprestimos')
@ApiTags('Empréstimo s')
export class EmprestimoRouter {
  private readonly emprestimoController: EmprestimoController

  constructor (
    @Inject('AbstractRepositoryFactory')
    readonly abstractRepositoryFactory: AbstractRepositoryFactory) {
    this.emprestimoController = new EmprestimoController(this.abstractRepositoryFactory)
  }

  @Post('')
  @ApiResponse({ status: HttpStatus.CREATED })
  @ApiOperation({ summary: 'Emprestar livro' })
  async emprestarLivro (@Body() input: EmprestarLivroInput, @Res() response: any): Promise<any> {
    const emprestimoResponse = await this.emprestimoController.emprestar(input)
    return adaptNestJSResolver(emprestimoResponse, response)
  }
}
