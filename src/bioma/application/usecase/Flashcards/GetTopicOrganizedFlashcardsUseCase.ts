import { AbstractFlashcard } from "../../../domain/model/flashcard/AbstractFlashcard";
import { FlashcardByTopicRetrieverServicePort } from "../../../domain/ports/driver/service/FlashcardByTopicRetrieverServicePort";
import { OrganizerServicePort } from "../../../domain/ports/driver/service/OrganizerServicePort";
import { GetOrganizedFlashcardsByTopicUseCasePort } from "../../../domain/ports/driver/usecase/GetOrganizedFlashcardsByTopicUseCasePort";

export class GetTopicOrganizedFlashcardsUseCase implements GetOrganizedFlashcardsByTopicUseCasePort {
  constructor(
    private flashcardRetriever: FlashcardByTopicRetrieverServicePort,
    private flashcardOrganizer: OrganizerServicePort
  ) {}

  async getOrganizedFlashcards(id_topic: number): Promise<AbstractFlashcard[]> {
    let flashcards = await this.flashcardRetriever.getFlashcardsByTopic(id_topic);
    
    flashcards = this.flashcardOrganizer.prioritize(flashcards);
    return flashcards;
  }
}