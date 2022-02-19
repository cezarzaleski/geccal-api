import * as faker from 'faker'
import Colaborador from 'src/identificacao-acesso/domain/entity/colaborador'

export type ColaboradorParams = {
  nome?: string
  status?: boolean
  funcionalidadeId?: number
  id?: number
}

const defaultParams: ColaboradorParams = {
  nome: faker.name.findName(),
  status: true,
  funcionalidadeId: 1,
  id: 1
}

export const mockColaborador = (params?: ColaboradorParams): Colaborador => {
  let colaboradorParams = defaultParams
  if (params) colaboradorParams = Object.assign(defaultParams, params)
  return new Colaborador(
    colaboradorParams.nome,
    colaboradorParams.status,
    colaboradorParams.funcionalidadeId,
    colaboradorParams.id
  )
}
