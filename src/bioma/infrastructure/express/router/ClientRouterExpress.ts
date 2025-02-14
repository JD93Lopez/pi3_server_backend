import RouterExpress from '../../../../express/domain/RouterExpress'
import ClientRouterExpressPort from '../../../domain/port/driver/router/ClientRouterExpressPort'
import ClientControllerExpressPort from '../../../domain/port/driver/controller/ClientControllerExpressPort'

export default class ClientRouterExpress extends RouterExpress implements ClientRouterExpressPort {
  constructor(
    private readonly citaController: ClientControllerExpressPort
  ) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.getClientsRoutes()
  }

  public getClientsRoutes = (): void => {
    this.router.post(
      '/v1.0/client/verify',
      this.citaController.clientVerify.bind(this.citaController)
    )
    this.router.post(
      '/v1.0/client/create',
      this.citaController.clientCreate.bind(this.citaController)
    )
  }
}
