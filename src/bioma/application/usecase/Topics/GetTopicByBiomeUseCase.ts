import { AbstractTopic } from "../../../domain/model/topic/AbstractTopic";
import { TopicByBiomeRetrieverServicePort } from "../../../domain/ports/driver/service/TopicByBiomeRetrieverServicePort";
import { GetTopicByBiomeUseCasePort } from "../../../domain/ports/driver/usecase/GetTopicByBiomeUseCasePort";

export class GetTopicByBiomeUseCase implements GetTopicByBiomeUseCasePort {

    constructor(
        private topicByBiomeRetrieverService: TopicByBiomeRetrieverServicePort
    ){}

    async getTopicsByBiome(id_biome: number): Promise<AbstractTopic[]> {
        const topics = await this.topicByBiomeRetrieverService.getTopicsByBiome(id_biome);
        return topics
    }

}