import { AbstractFlashcard } from "../../../../model/flashcard/AbstractFlashcard";

export interface FlashcardRetrieverServicePort {
    getFlashcards(): Promise<AbstractFlashcard[]>
}