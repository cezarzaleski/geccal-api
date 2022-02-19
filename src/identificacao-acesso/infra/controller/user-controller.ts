import { httpResponseError, ok } from 'src/shared/infra/http/http'
import GetUser from 'src/identificacao-acesso/application/query/get-user'
import UsuarioRepository from 'src/identificacao-acesso/domain/repository/usuario-repository'

export default class UserController {
  constructor (
    private readonly usuarioRepository: UsuarioRepository
  ) {}

  async findById (id: number): Promise<any> {
    try {
      const getUser = new GetUser(this.usuarioRepository)
      const user = await getUser.execute(id)
      return ok(user)
    } catch (error) {
      return httpResponseError(error)
    }
  }
}
