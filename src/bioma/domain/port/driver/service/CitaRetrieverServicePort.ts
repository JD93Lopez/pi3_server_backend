import Cita from '../../../model/icon/Icon'

export default interface CitaRetrieverServicePort {
  retrieve: () => Promise<Cita[]>
}
