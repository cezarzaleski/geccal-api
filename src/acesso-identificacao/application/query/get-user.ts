import EmptyParamError from 'src/shared/exception/empty-param'
import UserDto from 'src/acesso-identificacao/application/dto/user-dto'
import UsuarioRepository from 'src/acesso-identificacao/domain/repository/usuario-repository'

export default class GetUser {
  constructor (readonly usuarioRepository: UsuarioRepository) {}

  async execute (id?: number): Promise<UserDto> {
    if (!id) throw new EmptyParamError('id')
    const user = await this.usuarioRepository.findById(id)
    return new UserDto(user.id!!, user.username!!, user.username!!)
  }
}
