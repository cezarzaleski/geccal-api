import DatabaseConnection from 'src/shared/infra/database/database-connection';
import * as mysql2 from 'mysql2';

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  mysql: any
  constructor() {
    this.connect().then()
  }
  query(statement: string, params: any) {
    return this.mysql.execute(statement, params);
  }

  async connect(): Promise<any> {
    this.mysql = mysql2.createPool({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
  }
}
