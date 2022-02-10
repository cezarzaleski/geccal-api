import * as faker from 'faker';
import Autor from 'src/acesso-identificacao/livro/domain/entity/autor';

export type EditoraParams = {
  nome?: string,
  status?: boolean,
  dataCadastro?: string,
  id?: number
}

const defaultParams: EditoraParams = {
  id: 1,
  nome: faker.name.findName(),
  dataCadastro: new Date('2022-02-08').toISOString(),
  status: true
}


export const mockEditora = (params?: EditoraParams): Autor =>{
  let editoraParametro = defaultParams
  if (params) editoraParametro = Object.assign(defaultParams, params)
  // @ts-ignore
  return new Autor(
    editoraParametro?.nome,
    editoraParametro.status,
    editoraParametro.dataCadastro,
    editoraParametro.id
  );
}
