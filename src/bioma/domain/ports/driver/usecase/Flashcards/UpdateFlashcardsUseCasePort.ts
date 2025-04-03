import { FlashcardInterface } from "../../../../types/FlashcardInterface";

export default interface UpdateFlashcardsUseCasePort {
    updateFlashcards(flashcards: FlashcardInterface[]): Promise<number[]>
}