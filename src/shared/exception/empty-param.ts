export default class EmptyParamError extends Error {
  constructor (param: string) {
    super(`Parâmetro ${param} obrigatório`)
    this.name = 'EmptyParamError'
  }
}
