import { AbstractTopic } from "../../../model/topic/AbstractTopic";

export interface TopicByBiomeRetrieverServicePort {
    getTopicsByBiome(id_biome: number): Promise<AbstractTopic[]>
}