import Cita from '../../../model/cita/Cita'

export default interface CitaUseCasePort {
  getCitas(): Promise<Cita[]>
}
