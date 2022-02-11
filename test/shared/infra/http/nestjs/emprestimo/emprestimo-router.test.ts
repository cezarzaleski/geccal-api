import request from 'supertest';
import { nestApp } from 'src/shared/infra/http/nestjs';
import { RegistrarEmprestimoInput } from 'src/emprestimo/application/dto/registrar-emprestimo-input';
import DatabaseConnectionAdapter from 'src/shared/infra/database/connection-adapter';
import DatabaseRepositoryFactory from 'src/shared/infra/database/database-repository-factory';
import { mockUsuario } from 'test/acesso-identificacao/domain/entity/mock-usuario';
import { mockColaborador } from 'test/acesso-identificacao/domain/entity/mock-colaborador';
import Usuario from 'src/acesso-identificacao/domain/entity/usuario';
import Colaborador from 'src/acesso-identificacao/domain/entity/colaborador';
import { mockAutor } from 'test/livro/domain/mock-autor';
import { mockEditora } from 'test/livro/domain/mock-editora';
import { mockLivro } from 'test/livro/domain/mock-livro';
import DatabaseConnection from 'src/shared/infra/database/database-connection';
import AbstractRepositoryFactory from 'src/shared/domain/factory/abstract-repository-factory';
import Autor from 'src/livro/domain/entity/autor';
import Editora from 'src/livro/domain/entity/editora';
import Livro from 'src/livro/domain/entity/livro';

describe('Emprestimo Router', () => {
  let app: any;
  let usuario: Usuario;
  let autor: Autor;
  let editora: Editora;
  let colaborador: Colaborador;
  let livro: Livro;
  let databaseRepositoryFactory: AbstractRepositoryFactory;
  let databaseConnection: DatabaseConnection
  beforeAll(async () => {
    usuario = mockUsuario();
    autor = mockAutor();
    colaborador = mockColaborador();
    editora = mockEditora();
    livro = mockLivro();
    databaseConnection = new DatabaseConnectionAdapter();
    databaseRepositoryFactory = new DatabaseRepositoryFactory(databaseConnection);
    jest.setTimeout(1000);
    app = await nestApp();
    await app.init();
  });
  afterAll(async () => {
    await cleanup()
  });
  afterEach(async () => {
    await cleanup()
  })
  describe('POST /api/emprestimos', () => {
    beforeAll(async () => {
      await databaseRepositoryFactory.createColaboradorRepository().save(colaborador);
      await databaseRepositoryFactory.createUsuarioRepository().save(usuario);
      await databaseRepositoryFactory.createAutorRepository().save(autor);
      await databaseRepositoryFactory.createEditoraRepository().save(editora);
      await databaseRepositoryFactory.createLivroRepository().save(livro);
    });
    const registrarEmprestimoInput = new RegistrarEmprestimoInput(
      '2022-02-06',
      2022,
      1,
      '2021-11-11',
      1,
      undefined,
    );
    it('deve retorn 201 com o emprestimo criado', async () => {
      const { status, body } = await request(app.getHttpServer())
        .post('/api/emprestimos')
        .send(registrarEmprestimoInput);
      expect(status).toBe(201);
      expect(body).not.toBeNull();
    });
  });

  const cleanup = async () => {
    await databaseConnection.query('delete from emprestimo', [])
    // @ts-ignore
    await databaseRepositoryFactory.createEmprestimoRepository().delete(1)
    // @ts-ignore
    await databaseRepositoryFactory.createLivroRepository().delete(livro.id)
    // @ts-ignore
    await databaseRepositoryFactory.createAutorRepository().delete(autor.id)
    // @ts-ignore
    await databaseRepositoryFactory.createEditoraRepository().delete(editora.id)
    // @ts-ignore
    await databaseRepositoryFactory.createUsuarioRepository().delete(usuario.id)
    // @ts-ignore
    await databaseRepositoryFactory.createColaboradorRepository().delete(colaborador.id)
  }
});
