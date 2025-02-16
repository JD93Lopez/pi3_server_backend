import Cita from '../../../model/icon/Icon'

export default interface ProximaCitaServicePort {
  next: (id: number) => Promise<Cita>
}