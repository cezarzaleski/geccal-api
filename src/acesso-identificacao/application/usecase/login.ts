import { Encrypter } from 'src/acesso-identificacao/infra/cryptography/encrypter'
import GeneratePassword from 'src/acesso-identificacao/domain/service/generate-password'
import EmptyParamError from 'src/shared/exception/empty-param'
import UnauthorizedError from 'src/acesso-identificacao/domain/exception/unauthorized'
import UsuarioRepository from 'src/acesso-identificacao/domain/repository/usuario-repository'

export default class Login {
  constructor (readonly userRepository: UsuarioRepository, readonly encrypter: Encrypter) {
    this.userRepository = userRepository
    this.encrypter = encrypter
  }

  async execute (email?: string, password?: string): Promise<string> {
    if (!email) throw new EmptyParamError('email')
    if (!password) throw new EmptyParamError('password')
    const user = await this.userRepository.findByEmail(email)
    const passwordValid = await GeneratePassword.compare(password, user.password ?? 'teste')
    if (passwordValid) return await this.encrypter.encrypt({ userId: user.id })
    throw new UnauthorizedError()
  }
}
