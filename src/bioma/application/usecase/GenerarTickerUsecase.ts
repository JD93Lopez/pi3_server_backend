import Ticket from '../../domain/model/ticket/Ticket'
import NullAgente from '../../domain/model/agente/NullAgente'
import ProximaCitaServicePort from '../../domain/port/driver/service/ProximaCitaServicePort'
import GenerarTickerUseCasePort from '../../domain/port/driver/usecase/GenerarTickerUseCasePort'
import TicketsPriorityQueueService from '../service/TicketsPriorityQueueService'

export default class GenerarTickerUsecase implements GenerarTickerUseCasePort {
  constructor(
    private readonly citaService: ProximaCitaServicePort
  ) {}

  public generateTicket = async (id: number): Promise<number> => {
    const citaDelTicket = await this.citaService.next(id)
    
    if (citaDelTicket && !citaDelTicket.isNull() && !citaDelTicket.getCliente().isNull()) {
      const ticket = new Ticket({
        numero: 0,
        cita: citaDelTicket,
        agente: new NullAgente()
      })
      TicketsPriorityQueueService.enqueue(ticket)
      return citaDelTicket.getId()
    }
    
    return -1
  }
}
