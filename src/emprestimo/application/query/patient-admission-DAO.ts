import PatientDTO from 'src/emprestimo/application/query/patient-DTO'

export default interface PatientAdmissionDAO {
  getPatients: () => Promise<PatientDTO[]>
}
