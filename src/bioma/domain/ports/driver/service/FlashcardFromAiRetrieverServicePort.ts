import AiFlashcards from "../../../docs/AiFlashcards";

export default interface FlashcardFromAiRetrieverServicePort {
    getAiFlashcards(topicId: number): Promise<AiFlashcards | null>
}