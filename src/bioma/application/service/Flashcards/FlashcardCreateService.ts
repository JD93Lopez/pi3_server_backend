import { FlashcardDoc } from "../../../domain/docs/FlashcardDoc";
import { AbstractFlashcard } from "../../../domain/model/flashcard/AbstractFlashcard";
import { FlashcardRepositoryPort } from "../../../domain/ports/driven/FlashcardRepositoryPort";
import { FlashcardCreateServicePort } from "../../../domain/ports/driver/service/CreateFlashcardServicePort";

export class FlashcardCreateService implements FlashcardCreateServicePort {

    constructor(private flashcardRepository: FlashcardRepositoryPort) {}

    async createFlashcard(id_topic: number, flashcard: AbstractFlashcard): Promise<number> {
        
        const flashcardDoc: FlashcardDoc = {
            id_flashcard: flashcard.getIdFlashcard(),
            question: flashcard.getQuestion(),
            answer: flashcard.getAnswer(),
            learned: flashcard.getLearned(),
            last_date: flashcard.getLastDate(),
            TOPICS_id_topic: id_topic
        }

        const id = await this.flashcardRepository.createFlashcard(flashcardDoc);

        return id;
        
    }
}