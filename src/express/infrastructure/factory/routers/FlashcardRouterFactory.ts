import { CreateFlashcardsUseCase } from "../../../../bioma/application/usecase/Flashcards/CreateFlashcardsUseCase"
import { GetTopicOrganizedFlashcardsUseCase } from "../../../../bioma/application/usecase/Flashcards/GetTopicOrganizedFlashcardsUseCase"
import FlashcardControllerExpress from "../../../../bioma/infrastructure/express/controller/FlashcardControllerExpress"
import FlashcardRouterExpress from "../../../../bioma/infrastructure/express/router/FlashcardRouterExpress"
import FlashcardByTopicRetrieverServiceFactory from "../../../../bioma/infrastructure/factory/service/FlashcardByTopicRetrieverServiceFactory"
import FlashcardCreateServiceFactory from "../../../../bioma/infrastructure/factory/service/FlashcardCreateServiceFactory"
import OrganizeServiceFactory from "../../../../bioma/infrastructure/factory/service/OrganizeServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"

export default class FlashcardRouterFactory {
    public static readonly create = (): RouterExpress => {

        const flashcardRetrieverService = FlashcardByTopicRetrieverServiceFactory.create()
        const organizeService = OrganizeServiceFactory.create()
        // TODO: validate service
        const organizeUseCase = new GetTopicOrganizedFlashcardsUseCase(flashcardRetrieverService, organizeService)
        // TODO: validate use case
           
        // ------------- CREATE FLASHCARD  ----------------
        const flashcardCreateService =  FlashcardCreateServiceFactory.create()
        const createFlashcardsUseCase = new CreateFlashcardsUseCase(flashcardCreateService)

        // ---------- FLASHCARD CONTROLLER ---------------
        const flashcardController = new FlashcardControllerExpress(organizeUseCase, createFlashcardsUseCase)
        // TODO: validate controller


        const flashcardRouter = new FlashcardRouterExpress(flashcardController)
        // TODO: validate router
        return  flashcardRouter
    }
}
