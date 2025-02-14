import Cita from '../../../model/cita/Cita'

export default interface CitasClienteUseCasePort {
  getCitas(id: number): Promise<Cita[]>
}
