import { Connection, createConnection } from 'typeorm';
import { Autor } from 'src/autor/autor';
import { AutorRepository } from 'src/autor/autor.repository';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { Usuario } from 'src/usuario/usuario';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'us-cdbr-iron-east-05.cleardb.net',
        port: 3306,
        username: 'b5351039e7e463',
        password: '021fafa0',
        database: 'heroku_fe076c2ee5de15b',
        entities: [Autor, Usuario],
        synchronize: false,
        logging: 'all'
      }),
  },
  {
    provide: 'AutorRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(AutorRepository),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'UsuarioRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(UsuarioRepository),
    inject: ['DATABASE_CONNECTION'],
  }

];
