import MovieUseCase from '../../../movie/application/usecase/CitaUseCase'
import CitaControllerExpress from '../../../movie/infrastructure/express/controller/CitaControllerExpress'
import CitaRouterExpress from '../../../movie/infrastructure/express/router/CitaRouterExpress'
import Server from '../server/Server'
import CitaRetrieverServiceFactory from '../../../movie/infrastructure/factory/service/CitaRetrieverServiceFactory'
import ClientVerifyUseCase from '../../../movie/application/usecase/ClientVerifyUseCase'
import ClientVerifyServiceFactory from '../../../movie/infrastructure/factory/service/ClientVerifyServiceFactory'
import ClientCreateServiceFactory from '../../../movie/infrastructure/factory/service/ClientCreateServiceFactory'
import ClientCreateUseCase from '../../../movie/application/usecase/ClientCreateUseCase'
import ClientControllerExpress from '../../../movie/infrastructure/express/controller/ClientControllerExpress'
import ClientRouterExpress from '../../../movie/infrastructure/express/router/ClientRouterExpress'
import CitaCreateUseCase from '../../../movie/application/usecase/CitaCreateUseCase'
import CitaCreateServiceFactory from '../../../movie/infrastructure/factory/service/CitaCreateServiceFactory'
import CitasClienteUsecase from '../../../movie/application/usecase/CitasClienteUsecase'
import CitasClienteRetrieverServiceFactory from '../../../movie/infrastructure/factory/service/CitasClienteRetrieverServiceFactory'
import ProximaCitaServiceFactory from '../../../movie/infrastructure/factory/service/ProximaCitaServiceFactory'
import GenerarTickerUsecase from '../../../movie/application/usecase/GenerarTickerUsecase'
import ScreenTicketsUsecase from '../../../movie/application/usecase/ScreenTicketsUsecase'
import TurnoActualAtendidoUseCase from '../../../movie/application/usecase/TurnoActualAtendidoUseCase'
import AsignBancoNumberUseCase from '../../../movie/application/usecase/AsignBancoNumberUseCase'
import DequeueUsecase from '../../../movie/application/usecase/DequeueUsecase'
import CerrarCitaServiceFactory from '../../../movie/infrastructure/factory/service/CerrarCitaServiceFactory'

export default class ExpressFactory {
  public static readonly create = (): Server => {
    const citaRetrieverService = CitaRetrieverServiceFactory.create()
    const clientVerifyRetrieverService = ClientVerifyServiceFactory.create()
    const clientCreateRetrieverService = ClientCreateServiceFactory.create()
    const citaCreateRetrieverService = CitaCreateServiceFactory.create()
    const citasClienteRetrieverService = CitasClienteRetrieverServiceFactory.create()
    const proximaCitaService = ProximaCitaServiceFactory.create()
    const cerrarCitaService = CerrarCitaServiceFactory.create()
    // TODO: validate service
    const citaUseCase = new MovieUseCase(citaRetrieverService)
    const clientVerifyUseCase = new ClientVerifyUseCase(clientVerifyRetrieverService)
    const clientCreateUseCase = new ClientCreateUseCase(clientCreateRetrieverService)
    const citaCreateUseCase = new CitaCreateUseCase(citaCreateRetrieverService)
    const citasClienteUseCase = new CitasClienteUsecase(citasClienteRetrieverService)
    const generarTickerUsecase = new GenerarTickerUsecase(proximaCitaService)
    const screenTicketsUsecase = new ScreenTicketsUsecase()
    const turnoActualAtendidoUseCase = new TurnoActualAtendidoUseCase()
    const asignBancoNumberUseCase = new AsignBancoNumberUseCase()
    const dequeueUseCase = new DequeueUsecase(cerrarCitaService)
    // TODO: validate use case
    const citaController = new CitaControllerExpress(
      citaUseCase, citaCreateUseCase, citasClienteUseCase, 
      generarTickerUsecase, screenTicketsUsecase, turnoActualAtendidoUseCase,
      asignBancoNumberUseCase, dequeueUseCase
    )
    const clientController = new ClientControllerExpress(clientVerifyUseCase, clientCreateUseCase)
    // TODO: validate controller
    const citaRouter = new CitaRouterExpress(citaController)
    const clientRouter = new ClientRouterExpress(clientController)
    // TODO: validate router
    const server = new Server([citaRouter, clientRouter])
    // TODO: validate server
    return  server
  }
}
