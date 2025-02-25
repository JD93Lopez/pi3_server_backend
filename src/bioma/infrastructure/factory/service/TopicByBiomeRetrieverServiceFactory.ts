import { TopicsByBiomeRetrieverService } from '../../../application/service/Topics/TopicsByBiomeRetrieverService'
import { TopicByBiomeRetrieverServicePort } from '../../../domain/ports/driver/service/TopicByBiomeRetrieverServicePort'
import TopicRepositoryFactory from '../repository/TopicRepositoryFactory'

export default class TopicByBiomeRetrieverServiceFactory {
  public static readonly create = (): TopicByBiomeRetrieverServicePort  => {
    const repository = TopicRepositoryFactory.create()
    return new TopicsByBiomeRetrieverService(repository)
  }
}
