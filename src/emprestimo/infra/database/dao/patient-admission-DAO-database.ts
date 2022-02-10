import PatientDTO from 'src/emprestimo/application/query/patient-DTO'
import mongoose from 'mongoose'
import PatientAdmissionDAO from 'src/emprestimo/application/query/patient-admission-DAO'
import { MongoPatientAdmissionModel, MongoPatientAdmissionSchema } from 'src/emprestimo/infra/database/schemas/mongo-patient-admission.schema'

export default class PatientAdmissionDAODatabase implements PatientAdmissionDAO {
  private readonly admissionModel: mongoose.Model<mongoose.Document>
  constructor () {
    this.admissionModel = MongoPatientAdmissionModel
  }

  async getPatients (): Promise<PatientDTO[]> {
    const admissions: MongoPatientAdmissionSchema[] = await this.admissionModel
      .find({})
      .populate('patient')
    return admissions.map(admission => new PatientDTO(admission._id, admission.patient.fullName, admission.patient.birthday))
  }
}
