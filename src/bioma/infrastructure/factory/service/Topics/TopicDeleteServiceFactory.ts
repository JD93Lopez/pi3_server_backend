import TopicDeleteService from "../../../../application/service/Topics/TopicDeleteService";
import { TopicDeleteServicePort } from "../../../../domain/ports/driver/service/Topics/TopicDeleteServicePort";
import TopicRepositoryFactory from "../../repository/TopicRepositoryFactory";

export default class TopicDeleteServiceFactory {
    public static readonly create = (): TopicDeleteServicePort => {
        const topicRepository = TopicRepositoryFactory.create();
        return new TopicDeleteService(topicRepository);
    }
}
