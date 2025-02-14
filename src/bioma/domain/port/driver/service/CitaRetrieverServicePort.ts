import Cita from '../../../model/cita/Cita'

export default interface CitaRetrieverServicePort {
  retrieve: () => Promise<Cita[]>
}
