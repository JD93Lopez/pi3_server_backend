import CitaControllerExpressPort from '../../../domain/port/driver/controller/CitaControllerExpressPort'
import CitaRouterExpressPort from '../../../domain/port/driver/router/CitaRouterExpressPort'
import RouterExpress from '../../../../express/domain/RouterExpress'

export default class CitaRouterExpress extends RouterExpress implements CitaRouterExpressPort {
  constructor(
    private readonly citaController: CitaControllerExpressPort
  ) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.getCitasRoutes()
  }

  public getCitasRoutes = (): void => {
    this.router.get(
      '/v1.0/cita/citas',
      this.citaController.citas.bind(this.citaController)
    )    
    this.router.post(
      '/v1.0/cita/create',
      this.citaController.createCita.bind(this.citaController)
    )
    this.router.post(
      '/v1.0/cita/client',
      this.citaController.citasCliente.bind(this.citaController)
    )
    this.router.post(
      '/v1.0/cita/ticket/generate',
      this.citaController.generateTicket.bind(this.citaController)
    )
    this.router.post(
      '/v1.0/cita/tickets',
      this.citaController.getScreenTickets.bind(this.citaController)
    )
    this.router.post(
      '/v1.0/cita/turno/atendido',
      this.citaController.getTurnoActualAtendido.bind(this.citaController)
    )
    this.router.post(
      '/v1.0/cita/asign/banco',
      this.citaController.getNumeroBanco.bind(this.citaController)
    )
    this.router.post(
      '/v1.0/cita/turn/dequeue',
      this.citaController.dequeue.bind(this.citaController)
    )
  }
}
