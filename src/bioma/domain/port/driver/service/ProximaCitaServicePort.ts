import Cita from '../../../model/cita/Cita'

export default interface ProximaCitaServicePort {
  next: (id: number) => Promise<Cita>
}