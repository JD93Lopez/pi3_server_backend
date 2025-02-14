import Ticket from '../../../model/ticket/Ticket'

export default interface ScreenTicketsUseCasePort {
  getScreenTickets(lugar: string): Promise<Ticket[]>
}
