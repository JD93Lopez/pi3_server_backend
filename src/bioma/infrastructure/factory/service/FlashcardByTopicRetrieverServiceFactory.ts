import { FlashcardByTopicRetrieverService } from '../../../application/service/FlashcardByTopicRetrieverService'
import { FlashcardByTopicRetrieverServicePort } from '../../../domain/ports/driver/service/FlashcardByTopicRetrieverServicePort'
import FlashcardRepositoryFactory from '../repository/FlashcardRepositoryFactory'

export default class FlashcardByTopicRetrieverServiceFactory {
  public static readonly create = (): FlashcardByTopicRetrieverServicePort  => {
    const repository = FlashcardRepositoryFactory.create()
    return new FlashcardByTopicRetrieverService(repository)
  }
}
