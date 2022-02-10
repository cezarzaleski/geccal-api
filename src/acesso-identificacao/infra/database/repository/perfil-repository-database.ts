import DatabaseConnection from 'src/shared/infra/database/database-connection';
import PerfilRepository from 'src/acesso-identificacao/domain/repository/perfil-repository';
import Perfil from 'src/acesso-identificacao/domain/entity/perfil';

export default class PerfilRepositoryDatabase implements PerfilRepository {
  constructor(readonly databaseConnection: DatabaseConnection) {}

  async save(perfil: Perfil): Promise<Perfil> {
    await this.databaseConnection.query(`
				insert into perfil (
				id_perfil no_perfil, st_ativo
				 )
				values
				(
					?, ?, ?
				)
			`,
      [
        perfil.id, perfil.nome, perfil.status
      ],
    );
    return Promise.resolve(perfil)
  }
}
