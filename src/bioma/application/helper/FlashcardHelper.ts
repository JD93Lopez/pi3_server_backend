import { FlashcardDoc } from "../../domain/docs/FlashcardDoc";
import { AbstractFlashcard } from "../../domain/model/flashcard/AbstractFlashcard";
import { Flashcard } from "../../domain/model/flashcard/Flashcard";
import { FlashcardInterface } from "../../domain/types/FlashcardInterface";

export default class FlashcardHelper {

    databaseToDomainFlashcard(flashcard: FlashcardDoc[]): AbstractFlashcard[] {
        return flashcard.map((oneflashcard) => {
            return new Flashcard({
                id_flashcard: oneflashcard.id_flashcard,
                question: oneflashcard.question,
                answer: oneflashcard.answer,
                learned: oneflashcard.learned,
                last_date: oneflashcard.last_date
            });
        });
    }

    endpointToDomainFlashcard(flashcard: FlashcardInterface): AbstractFlashcard {
        return new Flashcard({
            id_flashcard: flashcard.id_flashcard,
            question: flashcard.pregunta,
            answer: flashcard.respuesta,
            learned: flashcard.learned,
            last_date: flashcard.last_date
        });

    }
}