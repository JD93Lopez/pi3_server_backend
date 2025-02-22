import { AbstractFlashcard } from "./AbstractFlashcard";

export class NullFlashcard extends AbstractFlashcard {
    constructor() {
        super(
            {
                id_flashcard: 0,
                question: "",
                answer: "",
                learned: false,
                last_date: new Date()
            }
        );
    }

    isNull(): boolean {
        return true;
    }
    
}