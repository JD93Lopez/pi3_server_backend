import { TopicDoc } from "../../../domain/docs/TopicDoc";
import { AbstractTopic } from "../../../domain/model/topic/AbstractTopic";
import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort";
import TopicUpdateServicePort from "../../../domain/ports/driver/service/Topics/TopicUpdateServicePort";

export default class TopicUpdateService implements TopicUpdateServicePort {

    constructor( private topicRepo: TopicRepositoryPort) {}

    updateTopic ( topic: AbstractTopic ): Promise<number> {

        const topicDoc : TopicDoc= {
            id_topic: topic.getIdTopic(),
            name: topic.getName(),
            ICONS_id_icon: topic.getIcon().getIdIcon(),         
            description: " ",
            BIOMES_id_biome: -1
        }

        const result = this.topicRepo.updateTopic(topicDoc);
        return result;
    }
}