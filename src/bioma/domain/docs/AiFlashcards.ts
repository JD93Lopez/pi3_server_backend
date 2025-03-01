export default interface AiFlashcards {
    tarjetas: AiFlashcard[];
}

export interface AiFlashcard {
    pregunta: string;
    respuesta: string;
}