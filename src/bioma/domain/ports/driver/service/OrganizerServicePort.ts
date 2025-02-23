import { AbstractFlashcard } from "../../../model/flashcard/AbstractFlashcard";

export interface OrganizerServicePort {
    prioritize ( flashcards: AbstractFlashcard[] ): AbstractFlashcard[] //esta organiza y las devuelve organizadas
}