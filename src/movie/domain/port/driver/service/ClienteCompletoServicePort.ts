import Cliente from '../../../model/cliente/Cliente'

export default interface ClienteCompletoServicePort {
  get: (id: number) => Promise<Cliente>
}