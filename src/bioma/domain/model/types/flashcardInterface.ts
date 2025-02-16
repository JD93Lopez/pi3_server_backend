export interface FlashcardInterface {
    id_flashcard: number;
    question: string;
    answer: string;
    learned: boolean;
    last_date?: Date;
}
