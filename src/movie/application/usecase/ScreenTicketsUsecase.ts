import ScreenTicketsUseCasePort from '../../domain/port/driver/usecase/ScreenTicketsUseCasePort'
import Ticket from '../../domain/model/ticket/Ticket'
import TicketsPriorityQueueService from '../service/TicketsPriorityQueueService'
import NullTicket from '../../domain/model/ticket/NullTicket'

export default class ScreenTicketsUsecase implements ScreenTicketsUseCasePort {
  constructor() {}

  public getScreenTickets = async (lugar: string): Promise<Ticket[]> => {
    const citasData = TicketsPriorityQueueService.listifyPriorityQueue(lugar)
    
    if (citasData.length > 0) {
      return citasData
    }
    return [new NullTicket()]
  }
}
