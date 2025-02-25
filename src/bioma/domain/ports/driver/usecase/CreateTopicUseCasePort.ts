import { TopicInterface } from "../../../types/TopicInterface";

export interface CreateTopicUseCasePort {
    createTopic( id_biome: number, topicClient: TopicInterface): Promise<number>
}