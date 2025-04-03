import { TopicInterface } from "../../../../types/TopicInterface";

export interface CreateFlashcardsUseCasePort {
    createFlashcards(topic: TopicInterface): Promise<number[]>
}