import { FlashcardInterface } from "../../types/FlashcardInterface";
export interface FlashcardRepositoryPort {
    findAll(): Promise<FlashcardInterface[]>
}