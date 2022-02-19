import Editora from 'src/livro/domain/entity/editora'

export default interface EditoraRepository {
  save: (editora: Editora) => Promise<Editora>
  delete: (id: number) => Promise<void>
}
