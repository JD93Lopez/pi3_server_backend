import { AbstractFlashcard } from "../domain/model/flashcard/AbstractFlashcard";
import { Flashcard } from "../domain/model/flashcard/Flashcard";
import { FlashcardInterface } from "../domain/types/FlashcardInterface";

export default class FlashcardHelper {

    databaseToDomainFlashcard(flashcard: FlashcardInterface[]): AbstractFlashcard[] {

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
}