import { AbstractFlashcard } from "../../../model/flashcard/AbstractFlashcard";

export interface FlashcardByTopicRetrieverServicePort {
    getFlashcardsByTopic(id_topic: number): Promise<AbstractFlashcard[]>
}