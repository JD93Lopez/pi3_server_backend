import Cita from '../../../model/cita/Cita'

export default interface CitasClienteRetrieverServicePort {
  retrieve: (id: number) => Promise<Cita[]>
}
