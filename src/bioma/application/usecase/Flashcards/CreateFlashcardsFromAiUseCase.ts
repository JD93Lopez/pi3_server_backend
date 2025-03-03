import FlashcardsFromAiCreateServicePort from "../../../domain/ports/driver/service/FlashcardsFromAiCreateServicePort";
import CreateFlashcardsFromAiUseCasePort from "../../../domain/ports/driver/usecase/CreateFlashcardsFromAiUseCasePort";

export default class CreateFlashcardsFromAiUseCase implements CreateFlashcardsFromAiUseCasePort {
    
    constructor( private readonly createFlashcardsService : FlashcardsFromAiCreateServicePort) {}

    async createFlashcardsFromAi(topicId: number, nombreTema: string, descripcion: string, wishedNumberOfCards: number): Promise<any> {

        //Validaciones
        if (wishedNumberOfCards < 1) {
            wishedNumberOfCards = 1;
        }else if (wishedNumberOfCards > 15) {
            wishedNumberOfCards = 15;
        }

        const result = await this.createFlashcardsService.createFlashcardsFromAi(topicId, nombreTema, descripcion, wishedNumberOfCards);
        return result;
    }

}