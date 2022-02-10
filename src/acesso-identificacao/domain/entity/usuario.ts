export default class Usuario {
  constructor (
    readonly username?: string,
    readonly password?: string,
    readonly dataCadastro?: string,
    readonly status?: boolean,
    readonly perfilId?: number,
    readonly colaboradorId?: number,
    readonly dataUltimaVisita?: string,
    readonly dataDesativacao?: string,
    readonly id?: number
  ) {
  }
}
