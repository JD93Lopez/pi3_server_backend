import { FlashcardByTopicRetrieverServicePort } from "../../../domain/ports/driver/service/Flashcards/FlashcardByTopicRetrieverServicePort";
import FlashcardFromAiRetrieverServicePort from "../../../domain/ports/driver/service/Flashcards/FlashcardFromAiRetrieverServicePort";
import { OrganizerServicePort } from "../../../domain/ports/driver/service/Flashcards/OrganizerServicePort";
import { GetOrganizedFlashcardsByTopicUseCasePort } from "../../../domain/ports/driver/usecase/Flashcards/GetOrganizedFlashcardsByTopicUseCasePort";

export class GetTopicOrganizedFlashcardsUseCase implements GetOrganizedFlashcardsByTopicUseCasePort {
  constructor(
    private flashcardRetriever: FlashcardByTopicRetrieverServicePort,
    private flashcardOrganizer: OrganizerServicePort,
    private flashcardAiRetriever: FlashcardFromAiRetrieverServicePort
  ) {}

  async getOrganizedFlashcards(id_topic: number): Promise<any> {
    //respuesta default si no hay flashcards en la base de datos, ni de IA
    let response: any = {saved: -1, flashcards: []};

    //obtener flashcards de la base de datos
    let flashcards = await this.flashcardRetriever.getFlashcardsByTopic(id_topic);

    //si no hay en la base de datos, obtener flashcards de la IA
    if (flashcards.length !== 0) {
      //organizar flashcards de la base de datos
      flashcards = this.flashcardOrganizer.prioritize(flashcards);
      response = {saved: 1, flashcards: flashcards};
    }else{
      //obtener flashcards de la IA
      const aiFlashcards = await this.flashcardAiRetriever.getAiFlashcards(id_topic);
      //si hay flashcards de la IA
      if (aiFlashcards && aiFlashcards.tarjetas.length !== 0) {
        response = {saved: 0, flashcards: aiFlashcards};
      }
    }
    
    return response;
  }
}