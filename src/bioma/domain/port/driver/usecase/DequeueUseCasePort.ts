import Ticket from "../../../model/ticket/Ticket";

export default interface DequeueUseCasePort {
  dequeue(lugar: string, bancoNumber: number, previusTurn: number, idCita: number, anotaciones: string): Promise<Ticket>
}