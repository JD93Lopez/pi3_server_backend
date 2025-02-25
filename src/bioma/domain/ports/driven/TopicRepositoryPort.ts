import { TopicDoc } from "../../docs/TopicDoc";

export interface TopicRepositoryPort {
    save (topic: TopicDoc): Promise<number>
}