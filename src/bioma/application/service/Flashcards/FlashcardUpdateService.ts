import { AbstractFlashcard } from "../../../domain/model/flashcard/AbstractFlashcard";
import FlashcardUpdateServicePort from "../../../domain/ports/driver/service/FlashcardUpdateServicePort";
import { FlashcardRepositoryPort } from "../../../domain/ports/driven/FlashcardRepositoryPort";

export default class FlashcardUpdateService implements FlashcardUpdateServicePort {

    constructor(
            private flashcardRepository: FlashcardRepositoryPort
    ) {}

    async updateFlashcard(flashcard: AbstractFlashcard): Promise<number> {

        const flashcardDoc = {
            id_flashcard: flashcard.getIdFlashcard(),
            learned: flashcard.getLearned(),
            last_date: flashcard.getLastDate(),
        }

        const response = await this.flashcardRepository.update(flashcardDoc);
        return response;

    }
}


  