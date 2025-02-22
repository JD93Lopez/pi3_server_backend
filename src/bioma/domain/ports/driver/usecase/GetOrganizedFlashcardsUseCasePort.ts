import { AbstractFlashcard } from "../../../model/flashcard/AbstractFlashcard";

export interface GetOrganizedFlashcardsUseCasePort {
    getOrganizedFlashcards(): Promise<AbstractFlashcard[]>
}