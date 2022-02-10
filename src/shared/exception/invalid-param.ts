export default class InvalidParamError extends Error {
  constructor (param: string) {
    super(`O parâmetro ${param} é inválido.`)
    this.name = 'InvalidParamError'
  }
}
