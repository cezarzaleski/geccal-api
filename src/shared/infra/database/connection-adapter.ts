import DatabaseConnection from 'src/shared/infra/database/database-connection';
import * as pgm from 'promise-mysql';
// import * as pgm from 'mysql2';

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  mysql: any
  constructor() {
    this.connect().then()
  }
  query(statement: string, params: any) {
    return this.mysql.query(statement, params);
  }

  async connect(): Promise<any> {
    // this.mysql = await pgm.createPool({
    this.mysql = await pgm.createPool({
      host: 'us-cdbr-iron-east-05.cleardb.net',
      port: 3306,
      user: 'b5351039e7e463',
      password: '021fafa0',
      database: 'heroku_fe076c2ee5de15b'
    })
    this.mysql = await pgm.createPool({
      host: 'us-cdbr-iron-east-05.cleardb.net',
      port: 3306,
      user: 'b5351039e7e463',
      password: '021fafa0',
      database: 'heroku_fe076c2ee5de15b'
    })
  }
}
