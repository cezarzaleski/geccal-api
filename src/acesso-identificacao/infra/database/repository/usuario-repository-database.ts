import DatabaseConnection from 'src/shared/infra/database/database-connection'
import UsuarioRepository from 'src/acesso-identificacao/domain/repository/usuario-repository'
import Usuario from 'src/acesso-identificacao/domain/entity/usuario'

export default class UsuarioRepositoryDatabase implements UsuarioRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save (usuario: Usuario): Promise<Usuario> {
    await this.databaseConnection.query(`
				insert into usuario (
				id_usuario, no_usuario, no_senha, dt_cadastro, st_ativo, dt_ult_visita,
				 dt_desativacao, id_perfil, id_colaborador
				 )
				values
				(
					?, ?, ?, ?, ?, ?, ?, ?, ?
				)
			`,
    [
      usuario.id, usuario.username, usuario.password, usuario.dataCadastro,
      usuario.status, usuario.dataUltimaVisita, usuario.dataDesativacao,
      usuario.perfilId, usuario.colaboradorId
    ]
    )
    return Promise.resolve(usuario)
  }

  async delete (id: number): Promise<void> {
    await this.databaseConnection.query('' +
      'delete from usuario where id_usuario = ?',
    [id]
    )
    return Promise.resolve(undefined)
  }

  async findByEmail (email: string): Promise<Usuario> {
    // @ts-expect-error
    return Promise.resolve(undefined)
  }

  async findById (id: number): Promise<Usuario> {
    // @ts-expect-error
    return Promise.resolve(undefined)
  }
}
