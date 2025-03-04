import { TopicDoc } from "../../docs/TopicDoc";

export interface TopicRepositoryPort {
    save (topic: TopicDoc): Promise<number>
    getByBiomeId(biome_id: number): Promise<TopicDoc[]>
    deleteTopicById(id: number): Promise<number>
}