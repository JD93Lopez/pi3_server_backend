import { TopicCreateService } from '../../../../application/service/Topics/TopicCreateService'
import { CreateTopicServicePort } from '../../../../domain/ports/driver/service/Topics/CreateTopicServicePort'
import TopicRepositoryFactory from '../../repository/TopicRepositoryFactory'

export default class CreateTopicServiceFactory {
  public static readonly create = (): CreateTopicServicePort  => {
    const repository = TopicRepositoryFactory.create()
    return new TopicCreateService(repository)
  }
}