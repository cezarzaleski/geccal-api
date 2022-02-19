import * as faker from 'faker'
import Autor from 'src/acervo/domain/entity/autor'

export type AutorParams = {
  nome?: string
  status?: boolean
  dataCadastro?: string
  id?: number
}

const defaultParams: AutorParams = {
  id: 1,
  nome: faker.name.findName(),
  dataCadastro: new Date('2022-02-08').toISOString(),
  status: true
}

export const mockAutor = (params?: AutorParams): Autor => {
  let autorParametro = defaultParams
  if (params) autorParametro = Object.assign(defaultParams, params)
  return new Autor(
    autorParametro?.nome,
    autorParametro.status,
    autorParametro.dataCadastro,
    autorParametro.id
  )
}
