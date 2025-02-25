export interface FlashcardInterface {
    id_flashcard: number;
    pregunta: string;
    respuesta: string;
    learned: boolean;
    last_date: Date;
}
