import DatabaseConnection from 'src/shared/infra/database/database-connection'
import AutorRepository from 'src/acervo/domain/repository/autor-repository'
import Autor from 'src/acervo/domain/entity/autor'

export default class AutorRepositoryDatabase implements AutorRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save (autor: Autor): Promise<Autor> {
    await this.databaseConnection.query('' +
      'insert into autor (id_autor, no_autor, st_ativo, dt_cadastro) values (?, ?, ?, ?)',
    [
      autor.id, autor.nome, autor.status, autor.dataCadastro
    ]
    )
    return Promise.resolve(autor)
  }

  async delete (id: number): Promise<void> {
    await this.databaseConnection.query('' +
      'delete from autor where id_autor = ?',
    [id]
    )
    return Promise.resolve(undefined)
  }
}
