import Server from '../server/Server'
import OrganizeServiceFactory from '../../../bioma/infrastructure/factory/service/OrganizeServiceFactory'
import { GetTopicOrganizedFlashcardsUseCase } from '../../../bioma/application/usecase/GetTopicOrganizedFlashcardsUseCase'
import FlashcardControllerExpress from '../../../bioma/infrastructure/express/controller/FlashcardControllerExpress'
import FlashcardRouterExpress from '../../../bioma/infrastructure/express/router/FlashcardRouterExpress'
import FlashcardByTopicRetrieverServiceFactory from '../../../bioma/infrastructure/factory/service/FlashcardByTopicRetrieverServiceFactory'

export default class ExpressFactory {
  public static readonly create = (): Server => {
    const flashcardRetrieverService = FlashcardByTopicRetrieverServiceFactory.create()
    const organizeService = OrganizeServiceFactory.create()
    // TODO: validate service
    const organizeUseCase = new GetTopicOrganizedFlashcardsUseCase(flashcardRetrieverService, organizeService)
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
