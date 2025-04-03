import { FlashcardFromAiRetrieverService } from '../../../../application/service/Flashcards/FlashcardFromAiRetrieverService'
import FlashcardFromAiRetrieverServicePort from '../../../../domain/ports/driver/service/Flashcards/FlashcardFromAiRetrieverServicePort'
import AiServerFlashcardsProvider from '../../../Repository/backend_api/provider/AiServerFlashcardsProvider'

export default class FlashcardFromAiRetrieverServiceFactory {
  public static readonly create = (): FlashcardFromAiRetrieverServicePort  => {
    const aiProvider = new AiServerFlashcardsProvider()
    return new FlashcardFromAiRetrieverService(aiProvider)
  }
}
