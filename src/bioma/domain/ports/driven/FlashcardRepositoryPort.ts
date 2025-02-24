import { FlashcardDcto} from "../../dctos/FlashcardDcto";  
export interface FlashcardRepositoryPort {
    findAll(): Promise<FlashcardDcto[]>
    findByTopic(topic_id: number): Promise<FlashcardDcto[]>
}