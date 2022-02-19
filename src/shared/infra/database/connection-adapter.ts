import DatabaseConnection from 'src/shared/infra/database/database-connection'
import mysql from 'mysql2'

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  static instance: DatabaseConnectionAdapter
  db: any

  private constructor () {
    this.connect()
  }

  static getInstance (): DatabaseConnectionAdapter {
    console.log('instanciou', !DatabaseConnectionAdapter.instance)
    if (!DatabaseConnectionAdapter.instance) {
      DatabaseConnectionAdapter.instance = new DatabaseConnectionAdapter()
    }
    return DatabaseConnectionAdapter.instance
  }

  async query (statement: string, params: any[]): Promise<any> {
    let parametros: any = []
    if (!params) parametros = params
    return this.db.execute(statement, parametros)
  }

  connect (): void {
    console.log('conectou')
    this.db = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    })
  }

  async disconnect (): Promise<void> {
    return this.db.end()
  }
}
