import TopicUpdateService from "../../../application/service/Topics/TopicUpdateService"
import TopicUpdateServicePort from "../../../domain/ports/driver/service/TopicUpdateServicePort"
import TopicRepositoryFactory from "../repository/TopicRepositoryFactory"

export default class TopicUpdateServiceFactory {
    public static readonly create = (): TopicUpdateServicePort => {
        const topicRepo = TopicRepositoryFactory.create()
        return new TopicUpdateService(topicRepo)
    }
}