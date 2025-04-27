export default interface AiFlashcards {
    tarjetas: AiFlashcard[];
}

export interface AiFlashcard {
    pregunta: string;
    respuesta: string;
}

export const errorAiFlashcards: AiFlashcards = {
    "tarjetas": [{
        pregunta: "Error de conexión con la IA",
        respuesta: "Error de conexión con la IA"
    }]
}