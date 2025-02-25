export interface FlashcardDoc {
    id_flashcard: number;
    question: string;
    answer: string;
    learned: boolean;
    last_date: Date;
    TOPICS_id_topic: number;
}