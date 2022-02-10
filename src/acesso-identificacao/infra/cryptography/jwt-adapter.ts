
import jwt from 'jsonwebtoken'
import { Encrypter } from 'src/acesso-identificacao/infra/cryptography/encrypter'
import { Decrypter } from 'src/acesso-identificacao/infra/cryptography/decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (payload: any): Promise<string> {
    return jwt.sign({ payload }, this.secret) as any
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
