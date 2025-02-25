import { AbstractTopic } from "../../domain/model/topic/AbstractTopic";
import { TopicRepositoryPort } from "../../domain/ports/driven/TopicRepositoryPort";

export class TopicCreateService {

    constructor(private topicRepository: TopicRepositoryPort) {}

    async createTopic( id_biome: number, topic: AbstractTopic ): Promise<number> {
        
        const topicDto = {
            name: topic.getName(),
            description: topic.getDescription(),
            icon_id: topic.getIcon().getIdIcon(),
            id_topic: -1
        }

        const id = await this.topicRepository.save( topicDto, id_biome );

        return id
    }
}