import FlashcardsFromAiCreateService from "../../../application/service/Flashcards/FlashcardFromAiCreateService"
import FlashcardsFromAiCreateServicePort from "../../../domain/ports/driver/service/FlashcardsFromAiCreateServicePort"
import AiServerFlashcardsProvider from "../../Repository/backend_api/provider/AiServerFlashcardsProvider"

export default class FlashcardsFromAiCreateServiceFactorty {

    public static readonly create = (): FlashcardsFromAiCreateServicePort => {
        const aiProvider = new AiServerFlashcardsProvider()
        return new FlashcardsFromAiCreateService(aiProvider)
    }
}