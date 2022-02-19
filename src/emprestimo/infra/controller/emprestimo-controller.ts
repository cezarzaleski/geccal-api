import { created, httpResponseError } from 'src/shared/infra/http/http'
import EmprestarLivro from 'src/emprestimo/application/usecase/emprestar-livro'
import { EmprestarLivroInput } from 'src/emprestimo/application/dto/emprestar-livro-input'
import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository'
import AbstractRepositoryFactory from 'src/shared/domain/factory/abstract-repository-factory'

export default class EmprestimoController {
  emprestimoRepository: EmprestimoRepository
  constructor (
    abstractRepositoryFactory: AbstractRepositoryFactory
  ) {
    this.emprestimoRepository = abstractRepositoryFactory.createEmprestimoRepository()
  }

  async emprestar (input: EmprestarLivroInput): Promise<any> {
    try {
      const emprestarLivro = new EmprestarLivro(this.emprestimoRepository)
      const emprestimo = await emprestarLivro.execute(input)
      return created(emprestimo)
    } catch (error) {
      return httpResponseError(error)
    }
  }
}
