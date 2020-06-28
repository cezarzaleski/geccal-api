import { Connection, createConnection } from 'typeorm';
import { AutorEntity } from 'src/autor/autor.entity';


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
        entities: [__dirname + '/../entity/**{.ts,.js}', __dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: 'all'
      }),
  },
  {
    provide: 'AUTOR_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(AutorEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
