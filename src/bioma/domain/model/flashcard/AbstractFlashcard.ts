import { FlashcardInterface } from "../types/flashcardInterface";
export abstract class abstractFlashcard {

    //  The protected properties mean that only the class and its subclasses can access them.
    
    protected id_flashcard: number;
    protected question: string;
    protected answer: string;
    protected learned: boolean;
    protected last_date?: Date;

    constructor(cardAttributes: FlashcardInterface) {
        this.id_flashcard = cardAttributes.id_flashcard;
        this.question = cardAttributes.question;
        this.answer = cardAttributes.answer;
        this.learned = cardAttributes.learned;
    }

    abstract isNull(): boolean;

    
    //TODO: Implement the method to check if the flashcard is learned
    
    //TODO: Chek the method to UPDATE tha last date added of the flashcard
    setLastDateAdded(last_date: Date): void {
        this.last_date = last_date;
    }

}


