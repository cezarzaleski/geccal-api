import PatientAdmission from 'src/emprestimo/domain/entity/patient-admission'

export default interface PatientAdmissionRepository {
  save: (admission: PatientAdmission) => Promise<PatientAdmission>
  findById: (id: string) => Promise<PatientAdmission>
  update: (id: string, admission: PatientAdmission) => Promise<PatientAdmission>
}
