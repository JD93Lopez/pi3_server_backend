import Server from '../server/Server'
import FlashcardRetrieverServiceFactory from '../../../bioma/infrastructure/factory/service/FlashcardRetrieverServiceFactory'
import OrganizeServiceFactory from '../../../bioma/infrastructure/factory/service/OrganizeServiceFactory'
import { GetOrganizedFlashcardsUseCase } from '../../../bioma/application/usecase/GetOrganizedFlashcardsUseCase'
import FlashcardControllerExpress from '../../../bioma/infrastructure/express/controller/FlashcardControllerExpress'
import FlashcardRouterExpress from '../../../bioma/infrastructure/express/router/FlashcardRouterExpress'

export default class ExpressFactory {
  public static readonly create = (): Server => {
    const flashcardRetrieverService = FlashcardRetrieverServiceFactory.create()
    const organizeService = OrganizeServiceFactory.create()
    // TODO: validate service
    const organizeUseCase = new GetOrganizedFlashcardsUseCase(flashcardRetrieverService, organizeService)
    // TODO: validate use case
    const flashcardController = new FlashcardControllerExpress(organizeUseCase)
    // TODO: validate controller
    const citaRouter = new FlashcardRouterExpress(flashcardController)
    // TODO: validate router
    const server = new Server([citaRouter])
    // TODO: validate server
    return  server
  }
}
