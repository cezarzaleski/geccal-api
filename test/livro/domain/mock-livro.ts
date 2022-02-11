import * as faker from 'faker';
import Livro from 'src/livro/domain/entity/livro';

export type LivroParams = {
  nome?: string,
  exemplar?: number,
  status?: boolean,
  dataCadastro?: string,
  id?: number,
  edicao?: string,
  ano?: number,
  observacao?: string,
  editoraId?: number,
  usuarioId?: number,
  origemLivroId?: number,
}

const defaultParams: LivroParams = {
  nome: faker.name.firstName(),
  exemplar: faker.random.number({ min: 1, max: 10 }),
  status: true,
  dataCadastro: faker.date.recent().toISOString(),
  id: 1,
  edicao: '1ª',
  ano: 2022,
  observacao: 'observação',
  editoraId: 1,
  usuarioId: 1,
  origemLivroId: 1,
}


export const mockLivro = (params?: LivroParams): Livro =>{
  let livroParametro = defaultParams
  if (params) livroParametro = Object.assign(defaultParams, params)
  // @ts-ignore
  return new Livro(
    livroParametro.nome,
    livroParametro.exemplar,
    livroParametro.status,
    livroParametro.dataCadastro,
    livroParametro.id,
    livroParametro.edicao,
    livroParametro.ano,
    livroParametro.observacao,
    livroParametro.editoraId,
    livroParametro.usuarioId,
    livroParametro.origemLivroId
  );
}
