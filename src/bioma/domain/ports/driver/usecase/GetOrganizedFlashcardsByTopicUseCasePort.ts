import { AbstractFlashcard } from "../../../model/flashcard/AbstractFlashcard";

export interface GetOrganizedFlashcardsByTopicUseCasePort {
    getOrganizedFlashcards(id_topic: number): Promise<AbstractFlashcard[]>
}