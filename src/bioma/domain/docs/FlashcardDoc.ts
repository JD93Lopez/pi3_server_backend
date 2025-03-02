export interface FlashcardDoc {
    id_flashcard: number;
    question: string;
    answer: string;
    learned: boolean;
    last_date: string;
    TOPICS_id_topic: number;
}