import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository'
import { RegistrarEmprestimoInput } from 'src/emprestimo/application/dto/registrar-emprestimo-input'
import Emprestimo from 'src/emprestimo/domain/entity/emprestimo'

export default class RegistrarEmprestimo {
  private readonly emprestimoRepository: EmprestimoRepository
  constructor (emprestimoRepository: EmprestimoRepository) {
    this.emprestimoRepository = emprestimoRepository
  }

  async execute (input: RegistrarEmprestimoInput): Promise<Emprestimo> {
    return await this.emprestimoRepository.save(RegistrarEmprestimoInput.toEntity(input))
  }
}
