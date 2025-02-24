import { AbstractFlashcard } from "../../domain/model/flashcard/AbstractFlashcard";
import { FlashcardRepositoryPort } from "../../domain/ports/driven/FlashcardRepositoryPort";
import { FlashcardByTopicRetrieverServicePort } from "../../domain/ports/driver/service/FlashcardByTopicRetrieverServicePort";
import FlashcardHelper from "../helper/FlashcardHelper";

export class FlashcardByTopicRetrieverService implements FlashcardByTopicRetrieverServicePort {

    constructor(private flashcardRepository: FlashcardRepositoryPort) {}

    async getFlashcardsByTopic(id_topic: number): Promise<AbstractFlashcard[]> {

        const flashcards = await this.flashcardRepository.findByTopic(id_topic);
        
        //Este helper lo pasa de la forma que viene de la base de datos a la forma que se necesita en el dominio
        const flashcardHelper = new FlashcardHelper();
        return flashcardHelper.databaseToDomainFlashcard(flashcards);
        
    }
}