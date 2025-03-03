import FlashcardsFromAiCreateServicePort from "../../../domain/ports/driver/service/FlashcardsFromAiCreateServicePort";
import AiServerFlashcardsProvider from "../../../infrastructure/Repository/backend_api/provider/AiServerFlashcardsProvider";

export default class FlashcardsFromAiCreateService implements FlashcardsFromAiCreateServicePort {

    constructor(private aiFlashcardsProvider: AiServerFlashcardsProvider) {}

    async createFlashcardsFromAi(topicId: number, nombreTema: string, 
        descripcion: string, wishedNumberOfCards: number): Promise<any> {
        
            const response = await this.aiFlashcardsProvider.createFlashcardsFromAi(topicId, nombreTema, descripcion, wishedNumberOfCards);

        return response;
    }
}