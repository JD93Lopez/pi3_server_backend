import { AbstractTopic } from "../../../domain/model/topic/AbstractTopic";
import { TopicRepositoryPort } from "../../../domain/ports/driven/TopicRepositoryPort";
import { TopicByBiomeRetrieverServicePort } from "../../../domain/ports/driver/service/TopicByBiomeRetrieverServicePort";
import TopicHelper from "../../helper/TopicHelper";

export class TopicsByBiomeRetrieverService implements TopicByBiomeRetrieverServicePort {

    constructor(private topicRepository: TopicRepositoryPort) {}

    async getTopicsByBiome(id_biome: number): Promise<AbstractTopic[]> {

        const topicHelper = new TopicHelper();
        
        const topics = await this.topicRepository.getByBiomeId(id_biome);

        const abstractTopics = topics.map((topic) => {
            return topicHelper.databaseToDomainTopic(topic)
        });

        return abstractTopics
    }

}