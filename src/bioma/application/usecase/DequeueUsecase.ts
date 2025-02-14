import Ticket from '../../domain/model/ticket/Ticket'
import TicketsPriorityQueueService from '../service/TicketsPriorityQueueService'
import NullTicket from '../../domain/model/ticket/NullTicket'
import DequeueUseCasePort from '../../domain/port/driver/usecase/DequeueUseCasePort'
import CerrarCitaServicePort from '../../domain/port/driver/service/CerrarCitaServicePort'

export default class DequeueUsecase implements DequeueUseCasePort {
  constructor(
    private readonly cerrarCitaServicePort: CerrarCitaServicePort
  ) {}

  public dequeue = async ( lugar: string, bancoNumber: number, previusTurn: number, idCita: number, anotaciones: string ): Promise<Ticket> => {

    if(previusTurn !== 0){
      TicketsPriorityQueueService.dequeueTicket(  lugar, previusTurn )
    }

    TicketsPriorityQueueService.numeroBancoActualPasar = bancoNumber

    TicketsPriorityQueueService.numeroTurnoActualAtendido = TicketsPriorityQueueService.getNumeroTurnoActualAtendido(lugar)

    const numeroAtendido = TicketsPriorityQueueService.numeroTurnoActualAtendido

    const ticketPorAtender = TicketsPriorityQueueService.searchTicket(  lugar, numeroAtendido )
    
    if(idCita !== 0){
      this.cerrarCitaServicePort.cerrar(idCita, anotaciones)
    }

    if (!ticketPorAtender.isNull()) {
      return ticketPorAtender
    }
    return new NullTicket()
  }
}
