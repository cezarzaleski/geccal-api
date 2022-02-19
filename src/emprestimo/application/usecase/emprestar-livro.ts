import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository'
import { EmprestarLivroInput } from 'src/emprestimo/application/dto/emprestar-livro-input'
import Emprestimo from 'src/emprestimo/domain/entity/emprestimo'

export default class EmprestarLivro {
  private readonly emprestimoRepository: EmprestimoRepository
  constructor (emprestimoRepository: EmprestimoRepository) {
    this.emprestimoRepository = emprestimoRepository
  }

  async execute (input: EmprestarLivroInput): Promise<Emprestimo> {
    return await this.emprestimoRepository.save(EmprestarLivroInput.toEntity(input))
  }
}
