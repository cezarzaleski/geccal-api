import { Connection, createConnection } from 'typeorm';
import { Autor } from 'src/autor/autor';
import { AutorRepository } from 'src/autor/autor.repository';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { Usuario } from 'src/usuario/usuario';
import { Editora } from 'src/editora/editora';
import { EditoraRepository } from 'src/editora/editora.repository';


export const databaseProviders = [
  {
    provide: Connection,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'us-cdbr-iron-east-05.cleardb.net',
        port: 3306,
        username: 'b5351039e7e463',
        password: '021fafa0',
        database: 'heroku_fe076c2ee5de15b',
        entities: [Autor, Usuario, Editora],
        synchronize: false,
        logging: 'all'
      }),
  },
  {
    provide: AutorRepository,
    useFactory: (connection: Connection) => connection.getCustomRepository(AutorRepository),
    inject: [Connection],
  },
  {
    provide: UsuarioRepository,
    useFactory: (connection: Connection) => connection.getCustomRepository(UsuarioRepository),
    inject: [Connection],
  },
  {
    provide: EditoraRepository,
    useFactory: (connection: Connection) => connection.getCustomRepository(EditoraRepository),
    inject: [Connection],
  }

];

export enum SituacaoEnum {
  Ativo = 1,
  Inativo = 0
}
