import AiFlashcards from "../../../domain/docs/AiFlashcards";
import FlashcardFromAiRetrieverServicePort from "../../../domain/ports/driver/service/FlashcardFromAiRetrieverServicePort";
import AiServerFlashcardsProvider from "../../../infrastructure/Repository/backend_api/provider/AiServerFlashcardsProvider";

export class FlashcardFromAiRetrieverService implements FlashcardFromAiRetrieverServicePort {

    constructor(private aiFlashcardsProvider: AiServerFlashcardsProvider) {}

    async getAiFlashcards(topicId: number): Promise<AiFlashcards | null> {

        const flashcards = await this.aiFlashcardsProvider.getFlashcardsAiTopicId(topicId);
        
        return flashcards;
    }
}