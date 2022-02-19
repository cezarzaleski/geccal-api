import EmptyParamError from 'src/shared/exception/empty-param'
import InvalidParamError from 'src/shared/exception/invalid-param'

export default class Emprestimo {
  readonly emprestadoEm: Date
  readonly devolvidoEm?: Date

  constructor (
    emprestadoEm?: string,
    readonly ano?: number,
    readonly status?: boolean,
    readonly usuarioId?: number,
    readonly livroId?: number,
    devolvidoEm?: string,
    readonly colaboradorId?: number,
    readonly matriculaId?: number,
    readonly id?: number
  ) {
    if (!emprestadoEm) throw new EmptyParamError('emprestadoEm')
    if (!usuarioId) throw new EmptyParamError('usuarioId')
    if (!livroId) throw new EmptyParamError('livroId')
    if (!colaboradorId && !matriculaId) throw new EmptyParamError('matriculaId')
    this.emprestadoEm = new Date(emprestadoEm)
    if (this.emprestadoEm.toString() === 'Invalid Date') throw new InvalidParamError('emprestadoEm')
    if (devolvidoEm) {
      this.devolvidoEm = new Date(devolvidoEm)
      if (this.devolvidoEm.toString() === 'Invalid Date') throw new InvalidParamError('devolvidoEm')
    }
  }
}
