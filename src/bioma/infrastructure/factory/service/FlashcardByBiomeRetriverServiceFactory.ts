import FlashcardByBiomeRetrieverService from "../../../application/service/Flashcards/FlashcardByBiomeRetriverService";
import FlashcardByBiomeRetrieverServicePort from "../../../domain/ports/driver/service/FlashcardByBiomeRetrieverServicePort";
import FlashcardRepositoryFactory from "../repository/FlashcardRepositoryFactory";

export default class FlashcardByBiomeRetriverServiceFactory {

    public static readonly create = (): FlashcardByBiomeRetrieverServicePort =>{
        const flashcardRepo = FlashcardRepositoryFactory.create();
        return new FlashcardByBiomeRetrieverService(flashcardRepo);
    }
}