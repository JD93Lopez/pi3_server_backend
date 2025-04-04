import { AbstractTopic } from "../../../domain/model/topic/AbstractTopic";
import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort";
import { CreateTopicServicePort } from "../../../domain/ports/driver/service/Topics/CreateTopicServicePort";

export class TopicCreateService implements CreateTopicServicePort {

    constructor(private topicRepository: TopicRepositoryPort) {}

    async createTopic( id_biome: number, topic: AbstractTopic ): Promise<number> {
        
        const topicDoc = {
            name: topic.getName(),
            description: topic.getDescription(),
            ICONS_id_icon: topic.getIcon().getIdIcon(),
            BIOMES_id_biome: id_biome,
            id_topic: -1,
        }

        const id = await this.topicRepository.save( topicDoc );

        return id
    }
}