import { AbstractTopic } from "../../../model/topic/AbstractTopic";

export interface TopicCreateServicePort {
    createTopic( id_biome: number, topic: AbstractTopic ): Promise<number>
}