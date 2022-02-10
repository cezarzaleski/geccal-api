import EmptyParamError from 'src/shared/exception/empty-param'
import PatientRepository from 'src/emprestimo/domain/repository/patient-repository'
import PatientAdmissionRepository from 'src/emprestimo/domain/repository/patient-admission-repository'
import GetPatientAdmissionOutput from 'src/emprestimo/application/dto/get-patient-admission-output'
import InitialHealthRepository from 'src/emprestimo/domain/repository/initial-health-repository'
import PatientOutput from 'src/emprestimo/application/dto/patient-output'
import InitialHealthOutput from 'src/emprestimo/application/dto/initial-health-output'
import AdmissionOutput from 'src/emprestimo/application/dto/admission-output'
import AdmissionRepository from 'src/emprestimo/domain/repository/admission-repository'

export default class GetPatientAdmission {
  constructor (
    readonly patientAdmissionRepository: PatientAdmissionRepository,
    readonly patientRepository: PatientRepository,
    readonly initialHealthRepository: InitialHealthRepository,
    readonly admissionRepository: AdmissionRepository
  ) {}

  async execute (id: string): Promise<GetPatientAdmissionOutput> {
    if (!id) throw new EmptyParamError('id')
    const patiendAdmission = await this.patientAdmissionRepository.findById(id)
    const patient = await this.patientRepository.findById(patiendAdmission.patientId)
    const patientOutput = new PatientOutput(
      patient.id,
      patient.getFullName(),
      patient.birthday,
      patient.getSex(),
      patient.getCpf()?.value,
      patient?.register,
      patient?.attendingPhysician,
      patient?.healthCare,
      patient?.linkPhoto
    )
    const getAdmissionOutput = new GetPatientAdmissionOutput(
      patiendAdmission.id,
      patientOutput,
      patiendAdmission.status
    )
    if (patiendAdmission.getInitialHealthId()) {
      // @ts-expect-error
      const initialHealth = await this.initialHealthRepository.findById(patiendAdmission.getInitialHealthId())
      getAdmissionOutput.initialHealth = new InitialHealthOutput(
        initialHealth.id,
        initialHealth.initialDescription,
        initialHealth.getConsciousnessLevels(),
        initialHealth.getDialysis(),
        initialHealth.getInsulin(),
        initialHealth.getOralDiet(),
        initialHealth.getDiagnostics(),
        initialHealth.getComorbidities(),
        initialHealth.getAllergies(),
        initialHealth.getLesion(),
        initialHealth.getMechanicalVentilation()
      )
    }

    if (patiendAdmission.getAdmissionId()) {
      // @ts-expect-error
      const admission = await this.admissionRepository.findById(patiendAdmission.getAdmissionId())
      getAdmissionOutput.admission = new AdmissionOutput(
        admission.id,
        admission.hospitalId,
        admission.utiId,
        admission.bedId,
        admission.typeNutritional,
        admission.foodInstrument,
        admission.getCaloricGoal(),
        admission.getProteinGoal(),
        admission.getDiets(),
        admission.getDateInternation(),
        admission.getDateInitialTherapy(),
        admission.getMedicalConducts()
      )
    }
    return getAdmissionOutput
  }
}
