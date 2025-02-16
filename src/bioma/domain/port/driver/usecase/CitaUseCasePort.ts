import Cita from '../../../model/icon/Icon'

export default interface CitaUseCasePort {
  getCitas(): Promise<Cita[]>
}
