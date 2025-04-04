import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort";
import { TopicDeleteServicePort } from "../../../domain/ports/driver/service/Topics/TopicDeleteServicePort";

export default class TopicDeleteService implements TopicDeleteServicePort{
  
    constructor(private topicRepository: TopicRepositoryPort) {}

    async deleteTopicById(topicId: number): Promise<number> {
        return this.topicRepository.deleteTopicById(topicId);
    }
}