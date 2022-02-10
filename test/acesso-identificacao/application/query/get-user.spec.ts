import { mock, MockProxy } from 'jest-mock-extended'
import UsuarioRepository from 'src/acesso-identificacao/domain/repository/user-repository'
import Usuario from 'src/acesso-identificacao/domain/entity/user'
import faker from 'faker'
import GetUser from 'src/acesso-identificacao/application/query/get-user'
import NotFoundError from 'src/shared/exception/not-found'
import EmptyParamError from 'src/shared/exception/empty-param'

describe('Get User Query', () => {
  let userRepository: MockProxy<UsuarioRepository>
  let user: Usuario
  let sut: GetUser
  beforeAll(async () => {
    userRepository = mock()
    user = new Usuario(faker.internet.email(), 'password', 'teste', 'id-user')
    sut = new GetUser(userRepository)
  })
  it('Should id user required', async () => {
    return sut.execute(undefined).catch(e => {
      expect(e).toEqual(new EmptyParamError('id'))
    }
    )
  })
  it('Should User not found', async () => {
    userRepository.findById.mockImplementation(() => {
      throw new NotFoundError('User')
    })
    return sut.execute('id').catch(e => {
      expect(e).toEqual(new NotFoundError('User'))
    }
    )
  })
  it('Should return user with success', async () => {
    userRepository.findById.mockResolvedValue(user)
    const userFind = await sut.execute('userId')
    expect(userFind.name).toEqual(user.name)
    expect(userFind.email).toEqual(user.getEmail().value)
    expect(userFind.id).toEqual(user.id)
  })
})
