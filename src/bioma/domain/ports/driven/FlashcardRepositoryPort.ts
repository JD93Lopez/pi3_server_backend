import { FlashcardDoc} from "../../docs/FlashcardDoc";  
export interface FlashcardRepositoryPort {
    findAll(): Promise<FlashcardDoc[]>
    findByTopic(topic_id: number): Promise<FlashcardDoc[]>
    save(flashcard: FlashcardDoc): Promise<number>
    update(flashcard: FlashcardDoc): Promise<number>
}