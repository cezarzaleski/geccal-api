import Autor from 'src/acesso-identificacao/livro/domain/entity/autor';

export default interface AutorRepository {
  save: (autor: Autor) => Promise<Autor>
  delete: (id: number) => Promise<void>
}
