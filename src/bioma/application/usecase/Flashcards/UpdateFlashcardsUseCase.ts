import FlashcardUpdateServicePort from "../../../domain/ports/driver/service/FlashcardUpdateServicePort";
import UpdateFlashcardsUseCasePort from "../../../domain/ports/driver/usecase/UpdateFlashcardsUseCasePort";
import { FlashcardInterface } from "../../../domain/types/FlashcardInterface";
import FlashcardHelper from "../../helper/FlashcardHelper";

export default class UpdateFlashcardsUseCase implements UpdateFlashcardsUseCasePort {
   
    constructor(
        private readonly updateFlashcardService: FlashcardUpdateServicePort
    ) {}

    updateFlashcards( flashcards: FlashcardInterface[]): Promise<number[]> {
        
        const flashcardHelper = new FlashcardHelper();
        
        const promise = flashcards.map( async flashcard => {
            
            //TODO: VERIFICAR SI ESTO SI FUNCIONA ASÍ 
            const flashcardDomain = flashcardHelper.endpointToDomainFlashcard(flashcard);
            const result = await this.updateFlashcardService.updateFlashcard(flashcardDomain);
            return result;
        });

        const result = Promise.all(promise);
        return result;

    }

    
}