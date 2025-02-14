import AsignBancoNumberUseCasePort from '../../domain/port/driver/usecase/AsignBancoNumberUseCasePort'
import TicketsPriorityQueueService from '../service/TicketsPriorityQueueService'

export default class AsignBancoNumberUseCase implements AsignBancoNumberUseCasePort {
  constructor() {}

  public getNumber = async (): Promise<number> => {
    const clientVerifyCode: number = TicketsPriorityQueueService.getNumeroBanco()
    return clientVerifyCode
  }
}
