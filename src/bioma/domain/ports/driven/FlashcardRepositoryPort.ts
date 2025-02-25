import { FlashcardDoc} from "../../docs/FlashcardDoc";  
export interface FlashcardRepositoryPort {
    findAll(): Promise<FlashcardDoc[]>
    findByTopic(topic_id: number): Promise<FlashcardDoc[]>
    createFlashcard(flashcard: FlashcardDoc): Promise<number>
}