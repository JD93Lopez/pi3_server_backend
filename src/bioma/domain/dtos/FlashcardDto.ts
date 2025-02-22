export interface FlashcardDto {
    id_flashcard: number;
    question: string;
    answer: string;
    learned: boolean;
    last_date: Date;
}