import DatabaseConnection from 'src/shared/infra/database/database-connection';
import mysql from 'mysql2';

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  db: any
  constructor() {
    this.connect()
  }
  async query(statement: string, params: any) {
    let parametros: any = []
    if (!params) parametros = params
    return this.db.execute(statement, parametros);
  }

  connect() {
    this.db = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });
  }
}
