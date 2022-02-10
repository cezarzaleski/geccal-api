import PatientDTO from 'src/emprestimo/application/query/patient-DTO'
import PatientAdmissionDAO from 'src/emprestimo/application/query/patient-admission-DAO'

export default class GetPatientAdmissions {
  constructor (readonly admissionDAO: PatientAdmissionDAO) {}

  async execute (): Promise<PatientDTO[]> {
    return await this.admissionDAO.getPatients()
  }
}
