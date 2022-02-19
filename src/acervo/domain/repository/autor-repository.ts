import Autor from 'src/acervo/domain/entity/autor'

export default interface AutorRepository {
  save: (autor: Autor) => Promise<Autor>
  delete: (id: number) => Promise<void>
}
