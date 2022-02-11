import { Body, Controller, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// @ts-expect-error
import { Response } from 'express';
import { adaptNestJSResolver } from 'src/shared/infra/http/nestjs/nestjs-router';
import EmprestimoController from 'src/emprestimo/infra/controller/emprestimo-controller';
import { RegistrarEmprestimoInput } from 'src/emprestimo/application/dto/registrar-emprestimo-input';
import AbstractRepositoryFactory from 'src/shared/domain/factory/abstract-repository-factory';

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
  @ApiOperation({ summary: 'Create new patient' })
  async create (@Body() input: RegistrarEmprestimoInput, @Res() response: Response): Promise<any> {
    const patientAdmissionResponse = await this.emprestimoController.registrar(input)
    return adaptNestJSResolver(patientAdmissionResponse, response)
  }
}
