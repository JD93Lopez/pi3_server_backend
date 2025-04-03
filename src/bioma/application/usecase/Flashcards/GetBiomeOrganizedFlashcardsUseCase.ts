import FlashcardByBiomeRetrieverServicePort from "../../../domain/ports/driver/service/Flashcards/FlashcardByBiomeRetrieverServicePort";
import { OrganizerServicePort } from "../../../domain/ports/driver/service/OrganizerServicePort";
import GetOrganizedFlashcardsByBiomeUseCasePort from "../../../domain/ports/driver/usecase/Flashcards/GetBiomeOrganizedFlashcardsUseCasePort";

export default class GetOrganizedFlashcardsByBiomeUseCase implements GetOrganizedFlashcardsByBiomeUseCasePort {

    constructor (private readonly getFlashcardsByBiomeService : FlashcardByBiomeRetrieverServicePort,
                private readonly organizeService: OrganizerServicePort
    ) {}

    async getOrganizedFlashcards(id_biome: number): Promise<any> {

        const flashcardsDomain = await this.getFlashcardsByBiomeService.getFlashcardsByBiome(id_biome);        
        const flashcardsOrganized = this.organizeService.prioritize(flashcardsDomain);
    
        return flashcardsOrganized;
    }
}