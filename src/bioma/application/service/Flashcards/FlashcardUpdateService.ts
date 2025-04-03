import { AbstractFlashcard } from "../../../domain/model/flashcard/AbstractFlashcard";
import FlashcardUpdateServicePort from "../../../domain/ports/driver/service/Flashcards/FlashcardUpdateServicePort";
import { FlashcardRepositoryPort } from "../../../domain/ports/driven/FlashcardRepositoryPort";

export default class FlashcardUpdateService implements FlashcardUpdateServicePort {

    constructor(
            private flashcardRepository: FlashcardRepositoryPort
    ) {}

    async updateFlashcard(flashcard: AbstractFlashcard): Promise<number> {

        const date = flashcard.getLastDate();

        const timestamp = date.getFullYear() + '-' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
        ('0' + date.getDate()).slice(-2) + ' ' +
        ('0' + date.getHours()).slice(-2) + ':' +
        ('0' + date.getMinutes()).slice(-2) + ':' +
        ('0' + date.getSeconds()).slice(-2);
        

        const flashcardDoc = {
            id_flashcard: flashcard.getIdFlashcard(),
            learned: flashcard.getLearned(),
            last_date: timestamp,
            question: '',
            answer: '',
            TOPICS_id_topic: -1
        }

        const response = await this.flashcardRepository.update(flashcardDoc);
        return response;

    }
}


  