import FlashcardUpdateService from "../../../application/service/Flashcards/FlashcardUpdateService";
import FlashcardRepositoryFactory from "../repository/FlashcardRepositoryFactory";

export default class FlashcardsUpdateServiceFactory {

    public static create = (): FlashcardUpdateService => {

        const repository = FlashcardRepositoryFactory.create();
        return new FlashcardUpdateService(repository);
   
    }
}