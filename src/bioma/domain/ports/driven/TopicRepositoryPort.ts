import { TopicDoc } from "../../docs/TopicDoc";

export interface TopicRepositoryPort {
    save (topic: TopicDoc, biome_id: number): Promise<number>
}