import Usuario from 'src/identificacao-acesso/domain/entity/usuario'
import * as faker from 'faker'

export type UsuarioParams = {
  username?: string
  password?: string
  dataCadastro?: string
  status?: boolean
  perfilId?: number
  colaboradorId?: number
  dataUltimaVisita?: string
  dataDesativacao?: string
}

const defaultParams: UsuarioParams = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
  dataCadastro: new Date('2022-02-08').toISOString(),
  status: true,
  perfilId: 1,
  colaboradorId: 1,
  dataUltimaVisita: new Date('2022-02-08').toISOString(),
  dataDesativacao: undefined
}

export const mockUsuario = (params?: UsuarioParams): Usuario => {
  let usuarioParametro = defaultParams
  if (params) usuarioParametro = Object.assign(defaultParams, params)
  // @ts-expect-error
  return new Usuario(
    usuarioParametro?.username,
    usuarioParametro.password,
    usuarioParametro.dataCadastro,
    usuarioParametro.status,
    usuarioParametro.perfilId,
    usuarioParametro.colaboradorId,
    usuarioParametro.dataUltimaVisita,
    usuarioParametro.dataDesativacao,
    1
  )
}
