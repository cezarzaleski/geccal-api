import DatabaseConnection from 'src/shared/infra/database/database-connection'
import ColaboradorRepository from 'src/identificacao-acesso/domain/repository/colaborador-repository'
import Colaborador from 'src/identificacao-acesso/domain/entity/colaborador'

export default class ColaboradorRepositoryDatabase implements ColaboradorRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save (colaborador: Colaborador): Promise<Colaborador> {
    await this.databaseConnection.query('' +
      'insert into colaborador (id_colaborador, no_colaborador, st_ativo, id_func) values (?, ?, ?, ?)',
    [
      colaborador.id, colaborador.nome, colaborador.status, colaborador.funcionalidadeId
    ]
    )
    return Promise.resolve(colaborador)
  }

  async delete (id: number): Promise<void> {
    await this.databaseConnection.query('' +
      'delete from colaborador where id_colaborador = ?',
    [id]
    )
    return Promise.resolve(undefined)
  }
}
