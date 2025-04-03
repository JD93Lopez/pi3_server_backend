import { AbstractFlashcard } from "../../../domain/model/flashcard/AbstractFlashcard";
import { FlashcardRepositoryPort } from "../../../domain/ports/driven/FlashcardRepositoryPort";
import FlashcardByBiomeRetrieverServicePort from "../../../domain/ports/driver/service/Flashcards/FlashcardByBiomeRetrieverServicePort";
import FlashcardHelper from "../../helper/FlashcardHelper";

export default class FlashcardByBiomeRetrieverService implements FlashcardByBiomeRetrieverServicePort {

    constructor(private readonly flashcardRepository: FlashcardRepositoryPort) {}

    async getFlashcardsByBiome(id_biome: number): Promise<AbstractFlashcard[]> {
       
            const flashcardHelper = new FlashcardHelper();
            const flashcards = await this.flashcardRepository.findByBiome(id_biome);
            const flashcardsDomain = flashcardHelper.databaseToDomainFlashcard(flashcards);
            
            return flashcardsDomain;

    }


}
  
    

