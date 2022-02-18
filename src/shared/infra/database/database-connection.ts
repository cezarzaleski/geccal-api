export default interface DatabaseConnection {
  query: (statement: string, params: any) => any
  disconnect: () => void
}
