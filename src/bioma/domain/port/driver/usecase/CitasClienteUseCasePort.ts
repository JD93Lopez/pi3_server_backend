import Cita from '../../../model/icon/Icon'

export default interface CitasClienteUseCasePort {
  getCitas(id: number): Promise<Cita[]>
}
