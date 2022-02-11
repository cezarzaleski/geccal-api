import DatabaseConnection from 'src/shared/infra/database/database-connection';
import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository';
import EmprestimoRepositoryDatabase from 'src/emprestimo/infra/database/repository/emprestimo-repository-database';
import UsuarioRepository from 'src/acesso-identificacao/domain/repository/usuario-repository';
import UsuarioRepositoryDatabase from 'src/acesso-identificacao/infra/database/repository/usuario-repository-database';
import PerfilRepositoryDatabase from 'src/acesso-identificacao/infra/database/repository/perfil-repository-database';
import PerfilRepository from 'src/acesso-identificacao/domain/repository/perfil-repository';
import ColaboradorRepository from 'src/acesso-identificacao/domain/repository/colaborador-repository';
import ColaboradorRepositoryDatabase
  from 'src/acesso-identificacao/infra/database/repository/colaborador-repository-database';
import AbstractRepositoryFactory from 'src/shared/domain/factory/abstract-repository-factory';
import AutorRepository from 'src/livro/domain/repository/autor-repository';
import AutorRepositoryDatabase from 'src/livro/infra/database/repository/autor-repository-database';
import EditoraRepository from 'src/livro/domain/repository/editora-repository';
import EditoraRepositoryDatabase from 'src/livro/infra/database/repository/editora-repository-database';
import LivroRepository from 'src/livro/domain/repository/livro-repository';
import LivroRepositoryDatabase from 'src/livro/domain/repository/livro-repository-database';

export default class DatabaseRepositoryFactory implements AbstractRepositoryFactory {

	constructor (readonly databaseConnection: DatabaseConnection) {}

  createEmprestimoRepository(): EmprestimoRepository {
		return new EmprestimoRepositoryDatabase(this.databaseConnection);
	}

  createUsuarioRepository(): UsuarioRepository {
    return new UsuarioRepositoryDatabase(this.databaseConnection);
  }

  createPerfilRepository(): PerfilRepository {
    return new PerfilRepositoryDatabase(this.databaseConnection);
  }

  createColaboradorRepository(): ColaboradorRepository {
    return new ColaboradorRepositoryDatabase(this.databaseConnection);
  }

  createAutorRepository(): AutorRepository {
    return new AutorRepositoryDatabase(this.databaseConnection);
  }

  createEditoraRepository(): EditoraRepository {
    return new EditoraRepositoryDatabase(this.databaseConnection);
  }

  createLivroRepository(): LivroRepository {
    return new LivroRepositoryDatabase(this.databaseConnection);
  }
}
