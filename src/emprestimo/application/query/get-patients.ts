import PatientDAO from 'src/emprestimo/application/query/patient-DAO'
import PatientDTO from 'src/emprestimo/application/query/patient-DTO'

export default class GetPatients {
  constructor (readonly patientDAO: PatientDAO) {
  }

  async execute (): Promise<PatientDTO[]> {
    return await this.patientDAO.getPatients()
  }
}
