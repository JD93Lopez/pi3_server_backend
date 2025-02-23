import { AbstractFlashcard } from "../../domain/model/flashcard/AbstractFlashcard";
import { FlashcardRepositoryPort } from "../../domain/ports/driven/FlashcardRepositoryPort";
import { FlashcardRetrieverServicePort } from "../../domain/ports/driver/service/FlashcardRetrieverServicePort";
import FlashcardHelper from "../../helper/FlashcardHelper";

export class FlashcardRetrieverService implements FlashcardRetrieverServicePort {

    constructor(private flashcardRepository: FlashcardRepositoryPort) {}

    async getFlashcards(): Promise<AbstractFlashcard[]> {

        const flashcards = await this.flashcardRepository.findAll();
        //Este helper lo pasa de la forma que viene de la base de datos a la forma que se necesita en el dominio
        const flashcardHelper = new FlashcardHelper();
        return flashcardHelper.databaseToDomainFlashcard(flashcards);
    }
}