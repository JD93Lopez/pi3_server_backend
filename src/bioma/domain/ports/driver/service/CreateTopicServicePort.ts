import { AbstractTopic } from "../../../model/topic/AbstractTopic";

export interface CreateTopicServicePort {
    createTopic( id_biome: number, topic: AbstractTopic ): Promise<number>
}