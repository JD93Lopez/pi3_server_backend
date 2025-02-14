import { Request, Response } from 'express'

export default interface CitaControllerExpressPort {
  citas(req: Request, res: Response): void
  createCita(req: Request, res: Response): void
  citasCliente(req: Request, res: Response): void
  generateTicket(req: Request, res: Response): void
  getScreenTickets(req: Request, res: Response): void
  getTurnoActualAtendido(req: Request, res: Response): void
  getNumeroBanco(req: Request, res: Response): void
  dequeue(req: Request, res: Response): Promise<void>
}