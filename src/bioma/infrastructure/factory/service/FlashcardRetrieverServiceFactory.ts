import { FlashcardRetrieverService } from '../../../application/service/FlashcardRetrieverService'
import { FlashcardRetrieverServicePort } from '../../../domain/ports/driver/service/FlashcardRetrieverServicePort'
import FlashcardRepositoryFactory from '../repository/FlashcardRepositoryFactory'

export default class FlashcardRetrieverServiceFactory {
  public static readonly create = (): FlashcardRetrieverServicePort  => {
    const repository = FlashcardRepositoryFactory.create()
    return new FlashcardRetrieverService(repository)
  }
}
