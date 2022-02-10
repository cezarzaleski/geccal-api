import PatientDTO from 'src/emprestimo/application/query/patient-DTO'

export default interface PatientDAO {
  getPatients: () => Promise<PatientDTO[]>
}
