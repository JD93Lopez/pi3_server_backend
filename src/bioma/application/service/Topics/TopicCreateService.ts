import { AbstractTopic } from "../../../domain/model/topic/AbstractTopic";
import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort";

export class TopicCreateService {

    constructor(private topicRepository: TopicRepositoryPort) {}

    async createTopic( id_biome: number, topic: AbstractTopic ): Promise<number> {
        
        const topicDoc = {
            name: topic.getName(),
            description: topic.getDescription(),
            icon_id: topic.getIcon().getIdIcon(),
            id_topic: -1,
            ICONS_id_icon: topic.getIcon().getIdIcon(),
            BIOMES_id_biome: -1
        }

        const id = await this.topicRepository.save( topicDoc, id_biome );

        return id
    }
}