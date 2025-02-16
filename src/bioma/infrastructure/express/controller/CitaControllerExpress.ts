import { Request, Response } from 'express'

import CitaControllerExpressPort from '../../../domain/port/driver/controller/CitaControllerExpressPort'
import CitaUseCasePort from '../../../domain/port/driver/usecase/CitaUseCasePort'
import Cita from '../../../domain/model/icon/Icon'
import CitaCreateUseCasePort from '../../../domain/port/driver/usecase/CitaCreateUseCasePort'
import CitasClienteUseCasePort from '../../../domain/port/driver/usecase/CitasClienteUseCasePort'
import GenerarTickerUseCasePort from '../../../domain/port/driver/usecase/GenerarTickerUseCasePort'
import ScreenTicketsUseCasePort from '../../../domain/port/driver/usecase/ScreenTicketsUseCasePort'
import TicketsPriorityQueueService from '../../../application/service/TicketsPriorityQueueService'
import TurnoActualAtendidoUseCasePort from '../../../domain/port/driver/usecase/TurnoActualAtendidoUseCasePort'
import AsignBancoNumberUseCasePort from '../../../domain/port/driver/usecase/AsignBancoNumberUseCasePort'
import DequeueUseCasePort from '../../../domain/port/driver/usecase/DequeueUseCasePort'

export default class CitaControllerExpress
  implements CitaControllerExpressPort
{
  constructor(
    private readonly citaUseCase: CitaUseCasePort,
    private readonly citaCreateUseCase: CitaCreateUseCasePort,
    private readonly citasClientUseCase: CitasClienteUseCasePort,
    private readonly generateTicketUseCase: GenerarTickerUseCasePort,
    private readonly getScreenTicketsUseCase: ScreenTicketsUseCasePort,
    private readonly getTurnoActualAtendidoUseCase: TurnoActualAtendidoUseCasePort,
    private readonly asignBancoNumberUseCasePort: AsignBancoNumberUseCasePort,
    private readonly dequeueUseCase: DequeueUseCasePort
  ) {}

  public async citas(_req: Request, res: Response): Promise<void> {
    // TODO: validate ALL
    const citas = await this.citaUseCase.getCitas()
    const citaResponse = citas.map((cita: Cita) => {
      return {
        id: cita.getId(),
        tipo: cita.getTipo(),
        fecha: cita.getFecha(),
        hora: cita.getHora(),
        lugar: cita.getLugar(),
        estado_cita: cita.getEstadoCita(),
        estado_ticket: cita.getEstadoTicket(),
        anotaciones: cita.getAnotaciones(),
        cliente: cita.getCliente()
      }
    })
    res.status(200).json({ message: 'Hello Citas', data: citaResponse })
  }

  public async createCita(req: Request, res: Response): Promise<void> {
    const citaData = req.body
    const citaId = await this.citaCreateUseCase.createCita(citaData)
    res.status(200).json({ message: 'Cita creada', data: citaId })
  }

  public async citasCliente(req: Request, res: Response): Promise<void> {
    const id = req.body['idCliente']
    const citas = await this.citasClientUseCase.getCitas(id)
    const citaResponse = citas.map((cita: Cita) => {
      return {
        id: cita.getId(),
        tipo: cita.getTipo(),
        fecha: cita.getFecha(),
        hora: cita.getHora(),
        lugar: cita.getLugar(),
        estado_cita: cita.getEstadoCita(),
        estado_ticket: cita.getEstadoTicket(),
        anotaciones: cita.getAnotaciones(),
        cliente: cita.getCliente()
      }
    })
    
    res.status(200).json({ message: 'Hello Citas', data: citaResponse })
  }

  public async generateTicket(req: Request, res: Response): Promise<void> {
    const id = req.body['idCliente']
    const citaId = await this.generateTicketUseCase.generateTicket(id)
    res.status(200).json({ message: 'Ticket generado', data: citaId })
  }

  public async getScreenTickets(req: Request, res: Response): Promise<void> {
    const lugar = req.body['lugar']
    const tickets = await this.getScreenTicketsUseCase.getScreenTickets(lugar)
    const primero: any = tickets[0]
    if(primero){
      primero['banco'] = TicketsPriorityQueueService.numeroBancoActualPasar
    }
    res.status(200).json({ message: 'Hello Tickets', data: tickets })
  }

  public async getTurnoActualAtendido(_req: Request, res: Response): Promise<void> {
    const turno = await this.getTurnoActualAtendidoUseCase.getTurnoActualAtendido()
    res.status(200).json({ message: 'Hello Turno', data: turno })
  }

  public async getNumeroBanco(_req: Request, res: Response): Promise<void> {
    const numeroBanco = await this.asignBancoNumberUseCasePort.getNumber()
    res.status(200).json({ message: 'Hello Banco', data: numeroBanco })
  }

  public async dequeue(req: Request, res: Response): Promise<void> {
    const lugar = req.body['lugar']
    const banco = req.body['banco']
    const numero = req.body['numero']
    const idCita = req.body['idCita']
    const anotaciones = req.body['anotaciones']
    const ticket = await this.dequeueUseCase.dequeue(lugar, banco, numero, idCita, anotaciones)
    res.status(200).json({ message: 'Hello Ticket', data: ticket })
  }

}
