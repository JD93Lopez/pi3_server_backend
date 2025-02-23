import { AbstractFlashcard, FlashcardAttributes } from "./AbstractFlashcard";

export class Flashcard extends AbstractFlashcard {

    constructor(cardAttributes: FlashcardAttributes) {
        super(cardAttributes);
    } 

    isNull(): boolean {
        return false;
    }
    
}
