import Login from 'src/acesso-identificacao/application/usecase/login'
import { JwtAdapter } from 'src/acesso-identificacao/infra/cryptography/jwt-adapter'
import { httpResponseError, ok } from 'src/shared/infra/http/http'
import UsuarioRepository from 'src/acesso-identificacao/domain/repository/usuario-repository'

export default class AuthController {
  constructor (
    private readonly usuarioRepository: UsuarioRepository,
    private readonly encrypter: JwtAdapter
  ) {}

  async authenticate (email?: string, password?: string): Promise<any> {
    try {
      const login = new Login(this.usuarioRepository, this.encrypter)
      const token = await login.execute(email, password)
      return ok({ token })
    } catch (error) {
      return httpResponseError(error)
    }
  }
}
