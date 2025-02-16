import { abstractFlashcard } from "./AbstractFlashcard";

export class NullUser extends abstractFlashcard {
    constructor() {
        super(
            {
                id_flashcard: -1,
                question: 'NONE',
                answer: 'NONE',
                learned: false  
            }
        );
    }

    isNull(): boolean {
        return true;
    }
    
}