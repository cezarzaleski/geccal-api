import Livro from 'src/acervo/domain/entity/livro'

export default interface LivroRepository {
  save: (livro: Livro) => Promise<Livro>
  delete: (id: number) => Promise<void>
}
