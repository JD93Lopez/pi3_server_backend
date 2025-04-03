import { AbstractTopic } from "../../../../model/topic/AbstractTopic";

export interface GetTopicByBiomeUseCasePort {
    getTopicsByBiome(id_biome: number): Promise<AbstractTopic[]>
}