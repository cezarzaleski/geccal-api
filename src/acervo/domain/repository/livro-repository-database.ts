import DatabaseConnection from 'src/shared/infra/database/database-connection'
import LivroRepository from 'src/acervo/domain/repository/livro-repository'
import Livro from 'src/acervo/domain/entity/livro'

export default class LivroRepositoryDatabase implements LivroRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save (livro: Livro): Promise<Livro> {
    await this.databaseConnection.query('insert into acervo ' +
      '(id_livro, no_livro, nu_exemplar, dt_cadastro, st_ativo, ' +
      'nu_edicao, nu_ano, no_obs, id_editora, id_usuario, id_origem_livro) ' +
      'values (?,?,?,?,?,?,?,?,?,?,?)',
    [
      livro.id, livro.nome, livro.exemplar, livro.dataCadastro, livro.status,
      livro.edicao, livro.ano, livro.observacao, livro.editoraId,
      livro.usuarioId, livro.origemLivroId
    ]
    )
    return Promise.resolve(livro)
  }

  async delete (id: number): Promise<void> {
    await this.databaseConnection.query('' +
      'delete from acervo where id_livro = ?',
    [id]
    )
    return Promise.resolve(undefined)
  }
}
