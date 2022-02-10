import UsuarioRepository from 'src/acesso-identificacao/domain/repository/user-repository'
import EmptyParamError from 'src/shared/exception/empty-param'
import UserDto from 'src/acesso-identificacao/application/dto/user-dto'

export default class GetUser {
  constructor (readonly userRepository: UsuarioRepository) {}

  async execute (id?: string): Promise<UserDto> {
    if (!id) throw new EmptyParamError('id')
    const user = await this.userRepository.findById(id)
    return new UserDto(user.id, user.name, user.getEmail()?.value)
  }
}
