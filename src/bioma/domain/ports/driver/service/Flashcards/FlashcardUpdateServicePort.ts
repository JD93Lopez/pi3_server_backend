import { AbstractFlashcard } from "../../../../model/flashcard/AbstractFlashcard";

export default interface FlashcardUpdateServicePort {
    updateFlashcard(flashcard: AbstractFlashcard): Promise<number>;
}