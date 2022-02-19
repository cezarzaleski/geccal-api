import DatabaseConnection from 'src/shared/infra/database/database-connection'
import EditoraRepository from 'src/acervo/domain/repository/editora-repository'
import Editora from 'src/acervo/domain/entity/editora'

export default class EditoraRepositoryDatabase implements EditoraRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save (editora: Editora): Promise<Editora> {
    await this.databaseConnection.query('' +
      'insert into editora (id_editora, no_editora, st_ativo, dt_cadastro) values (?, ?, ?, ?)',
    [
      editora.id, editora.nome, editora.status, editora.dataCadastro
    ]
    )
    return Promise.resolve(editora)
  }

  async delete (id: number): Promise<void> {
    await this.databaseConnection.query('' +
      'delete from editora where id_editora = ?',
    [id]
    )
    return Promise.resolve(undefined)
  }
}
