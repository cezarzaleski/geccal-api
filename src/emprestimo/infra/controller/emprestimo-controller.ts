import { created, httpResponseError } from 'src/shared/infra/http/http';
import RegistrarEmprestimo from 'src/emprestimo/application/usecase/registrar-emprestimo';
import { RegistrarEmprestimoInput } from 'src/emprestimo/application/dto/registrar-emprestimo-input';
import AbstractRepositoryFactory from 'src/acesso-identificacao/domain/factory/abstract-repository-factory';
import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository';

export default class EmprestimoController {
  emprestimoRepository: EmprestimoRepository
  constructor (
    abstractRepositoryFactory: AbstractRepositoryFactory
  ) {
    this.emprestimoRepository = abstractRepositoryFactory.createEmprestimoRepository()
  }

  async registrar (input: RegistrarEmprestimoInput): Promise<any> {
    try {
      const registrarEmprestimo = new RegistrarEmprestimo(this.emprestimoRepository)
      const admission = await registrarEmprestimo.execute(input)
      return created(admission)
    } catch (error) {
      return httpResponseError(error)
    }
  }
}
