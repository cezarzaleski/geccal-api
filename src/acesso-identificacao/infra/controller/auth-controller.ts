import Login from 'src/acesso-identificacao/application/usecase/login'
import UserRepositoryDatabase from 'src/acesso-identificacao/infra/database/repository/user-repository-database'
import { JwtAdapter } from 'src/acesso-identificacao/infra/cryptography/jwt-adapter'
import { httpResponseError, ok } from 'src/shared/infra/http/http'

export default class AuthController {
  constructor (
    private readonly userRepository: UserRepositoryDatabase,
    private readonly encrypter: JwtAdapter
  ) {}

  async authenticate (email?: string, password?: string): Promise<any> {
    try {
      const login = new Login(this.userRepository, this.encrypter)
      const token = await login.execute(email, password)
      return ok({ token })
    } catch (error) {
      return httpResponseError(error)
    }
  }
}
