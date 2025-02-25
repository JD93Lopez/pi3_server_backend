import { TopicDto } from "../../dctos/TopicDto";

export interface TopicRepositoryPort {
    save (topic: TopicDto, biome_id: number): Promise<number>
}