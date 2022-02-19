import * as faker from 'faker'
import Editora from 'src/acervo/domain/entity/editora'

export type EditoraParams = {
  nome?: string
  status?: boolean
  dataCadastro?: string
  id?: number
}

const defaultParams: EditoraParams = {
  id: 1,
  nome: faker.name.findName(),
  dataCadastro: new Date('2022-02-08').toISOString(),
  status: true
}

export const mockEditora = (params?: EditoraParams): Editora => {
  let editoraParametro = defaultParams
  if (params) editoraParametro = Object.assign(defaultParams, params)
  return new Editora(
    editoraParametro?.nome,
    editoraParametro.status,
    editoraParametro.dataCadastro,
    editoraParametro.id
  )
}
