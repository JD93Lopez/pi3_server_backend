import { CreateFlashcardsUseCase } from "../../../../bioma/application/usecase/Flashcards/CreateFlashcardsUseCase"
import { GetTopicOrganizedFlashcardsUseCase } from "../../../../bioma/application/usecase/Flashcards/GetTopicOrganizedFlashcardsUseCase"
import UpdateFlashcardsUseCase from "../../../../bioma/application/usecase/Flashcards/UpdateFlashcardsUseCase"
import FlashcardControllerExpress from "../../../../bioma/infrastructure/express/controller/FlashcardControllerExpress"
import FlashcardRouterExpress from "../../../../bioma/infrastructure/express/router/FlashcardRouterExpress"
import FlashcardByTopicRetrieverServiceFactory from "../../../../bioma/infrastructure/factory/service/Flashcards/FlashcardByTopicRetrieverServiceFactory"
import FlashcardCreateServiceFactory from "../../../../bioma/infrastructure/factory/service/Flashcards/FlashcardCreateServiceFactory"
import FlashcardsUpdateServiceFactory from "../../../../bioma/infrastructure/factory/service/Flashcards/FlashcardsUpdateServiceFactory"
import FlashcardFromAiRetrieverServiceFactory from "../../../../bioma/infrastructure/factory/service/Flashcards/FlashcardFromAiRetrieverServiceFactory"
import OrganizeServiceFactory from "../../../../bioma/infrastructure/factory/service/Flashcards/OrganizeServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"
import FlashcardsFromAiCreateServiceFactorty from "../../../../bioma/infrastructure/factory/service/Flashcards/FlashcardsFromAiCreateServiceFactorty"
import CreateFlashcardsFromAiUseCase from "../../../../bioma/application/usecase/Flashcards/CreateFlashcardsFromAiUseCase"
import FlashcardByBiomeRetriverServiceFactory from "../../../../bioma/infrastructure/factory/service/Flashcards/FlashcardByBiomeRetriverServiceFactory"
import GetOrganizedFlashcardsByBiomeUseCase from "../../../../bioma/application/usecase/Flashcards/GetBiomeOrganizedFlashcardsUseCase"

export default class FlashcardRouterFactory {
    public static readonly create = (): RouterExpress => {

        const flashcardRetrieverService = FlashcardByTopicRetrieverServiceFactory.create()
        const organizeService = OrganizeServiceFactory.create()
        const flashcardAiRetrieverService = FlashcardFromAiRetrieverServiceFactory.create()
        // TODO: validate service
        const organizeUseCase = new GetTopicOrganizedFlashcardsUseCase(flashcardRetrieverService, organizeService, flashcardAiRetrieverService)
        // TODO: validate use case
           
        // ------------- CREATE FLASHCARD  ----------------
        const flashcardCreateService =  FlashcardCreateServiceFactory.create()
        const createFlashcardsUseCase = new CreateFlashcardsUseCase(flashcardCreateService)

        // ------------- UPDATE FLASHCARD  ----------------
        const updateFlashcardService =  FlashcardsUpdateServiceFactory.create()
        const updateFlashcardsUseCase = new UpdateFlashcardsUseCase(updateFlashcardService);

        // ------------- CREATE FLASHCARDS FROM IA ----------------
        const flashcardsAiCreateService = FlashcardsFromAiCreateServiceFactorty.create()
        const createFlashcardsFromAiUseCase = new CreateFlashcardsFromAiUseCase(flashcardsAiCreateService)

        
        // ----------  GET FLASHCARD BY BIOME ---------------
        const flashcard = FlashcardByBiomeRetriverServiceFactory.create()
        const getFlashcardsByBiomeUseCase = new GetOrganizedFlashcardsByBiomeUseCase(flashcard, organizeService)
        
        // ---------- FLASHCARD CONTROLLER ---------------
        const flashcardController = new FlashcardControllerExpress(organizeUseCase, createFlashcardsUseCase, updateFlashcardsUseCase, createFlashcardsFromAiUseCase, getFlashcardsByBiomeUseCase)
        // TODO: validate controller

        const flashcardRouter = new FlashcardRouterExpress(flashcardController)
        // TODO: validate router
        return  flashcardRouter
    }
}


