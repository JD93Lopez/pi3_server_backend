import { TopicDto } from "../../dtos/TopicDto";

export interface TopicRepositoryPort {
    save (topic: TopicDto, biome_id: number): Promise<number>
}