import { AbstractFlashcard } from "../../domain/model/flashcard/AbstractFlashcard";
import { Flashcard } from "../../domain/model/flashcard/Flashcard";
import { FlashcardRepositoryPort } from "../../domain/ports/driven/FlashcardRepositoryPort";
import { FlashcardRetrieverServicePort } from "../../domain/ports/driver/service/FlashcardRetrieverServicePort";

export class FlashcardRetrieverService implements FlashcardRetrieverServicePort {

    constructor(private flashcardRepository: FlashcardRepositoryPort) {}

    async getFlashcards(): Promise<AbstractFlashcard[]> {
        const flashcards = await this.flashcardRepository.findAll();

        return flashcards.map(flashcard => (new Flashcard({
            id_flashcard: flashcard.id_flashcard,
            question: flashcard.question,
            answer: flashcard.answer,
            learned: flashcard.learned,
            last_date: flashcard.last_date
        })));
    }

}