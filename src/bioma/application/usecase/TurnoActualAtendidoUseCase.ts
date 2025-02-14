import TurnoActualAtendidoUseCasePort from '../../domain/port/driver/usecase/TurnoActualAtendidoUseCasePort'
import TicketsPriorityQueueService from '../service/TicketsPriorityQueueService'

export default class TurnoActualAtendidoUseCase implements TurnoActualAtendidoUseCasePort {
  constructor() {}

  public getTurnoActualAtendido = async (): Promise<number> => {
    const clientVerifyCode: number = TicketsPriorityQueueService.numeroTurnoActualAtendido
    return clientVerifyCode
  }
}
