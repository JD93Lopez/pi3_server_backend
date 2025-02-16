import { FlashcardInterface } from "../types/flashcardInterface";
import { abstractFlashcard } from "./AbstractFlashcard";

export class Flashcard extends abstractFlashcard {

    constructor(cardAttributes: FlashcardInterface) {
        super(cardAttributes);
    } 

    isNull(): boolean {
        return false;
    }
    
}
