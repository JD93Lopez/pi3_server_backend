import { AbstractFlashcard } from "../../../../model/flashcard/AbstractFlashcard";

export interface FlashcardCreateServicePort {
    createFlashcard( id_topic: number, flashcard: AbstractFlashcard): Promise<number>
}