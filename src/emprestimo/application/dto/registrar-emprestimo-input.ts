import Emprestimo from 'src/emprestimo/domain/entity/emprestimo'

export class RegistrarEmprestimoInput {
  constructor (
    readonly emprestadoEm?: string,
    readonly ano?: number,
    readonly livroId?: number,
    readonly devolvidoEm?: string,
    readonly colaboradorId?: number,
    readonly matriculaId?: number
  ) {}

  static toEntity (input: RegistrarEmprestimoInput, id?: number): Emprestimo {
    return new Emprestimo(
      input.emprestadoEm,
      input.ano,
      true,
      1,
      input.livroId,
      input.devolvidoEm,
      input.colaboradorId,
      input.matriculaId,
      id
    )
  }
}
