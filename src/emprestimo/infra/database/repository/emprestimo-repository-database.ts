import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository'
import DatabaseConnection from 'src/shared/infra/database/database-connection'
import Emprestimo from 'src/emprestimo/domain/entity/emprestimo'

export default class EmprestimoRepositoryDatabase implements EmprestimoRepository {
  constructor (readonly databaseConnection: DatabaseConnection) {}

  async save (emprestimo: Emprestimo): Promise<Emprestimo> {
    await this.databaseConnection.query(`
				insert into emprestimo (
				dt_emprestimo, dt_prev_devolucao, nu_ano, st_ativo, dt_devolucao,
				 id_colaborador, id_evangelizando_turma, id_usuario, id_livro
				 )
				values
				(
					?, ?, ?, ?, ?, ?, ?, ?, ?
				)
			`,
    [
      emprestimo.getEmprestadoEm().toISOString(), emprestimo.getEmprestadoEm().toISOString(),
      emprestimo.ano, emprestimo.status, null, emprestimo.colaboradorId, emprestimo.matriculaId,
      emprestimo.usuarioId, emprestimo.livroId
    ]
    )
    return Promise.resolve(emprestimo)
  }

  async delete (id: number): Promise<void> {
    await this.databaseConnection.query('' +
      'delete from emprestimo where id_emprestimo = ?',
    [id]
    )
    return Promise.resolve(undefined)
  }
}
