import { AbstractFlashcard } from "../../domain/model/flashcard/AbstractFlashcard";
import { FlashcardRetrieverServicePort } from "../../domain/ports/driver/service/FlashcardRetrieverServicePort";
import { OrganizerServicePort } from "../../domain/ports/driver/service/OrganizerServicePort";

export class GetOrganizedFlashcardsUseCase {
  constructor(
    private flashcardRetriever: FlashcardRetrieverServicePort,
    private flashcardOrganizer: OrganizerServicePort
  ) {}

  async getOrganizedFlashcards(): Promise<AbstractFlashcard[]> {
    let flashcards = await this.flashcardRetriever.getFlashcards();
    
    flashcards = this.flashcardOrganizer.prioritize(flashcards);
    return flashcards;
  }
}