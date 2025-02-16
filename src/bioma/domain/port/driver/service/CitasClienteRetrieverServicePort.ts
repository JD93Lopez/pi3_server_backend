import Cita from '../../../model/icon/Icon'

export default interface CitasClienteRetrieverServicePort {
  retrieve: (id: number) => Promise<Cita[]>
}
