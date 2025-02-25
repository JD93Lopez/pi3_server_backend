export abstract class AbstractFlashcard {

    //  The protected properties mean that only the class and its subclasses can access them.
    
    protected id_flashcard: number;
    protected question: string;
    protected answer: string;
    protected learned: boolean;
    protected last_date: Date;
    

    constructor(cardAttributes: FlashcardAttributes) {
        this.id_flashcard = cardAttributes.id_flashcard;
        this.question = cardAttributes.question;
        this.answer = cardAttributes.answer;
        this.learned = cardAttributes.learned;
        this.last_date = cardAttributes.last_date;
    }

    abstract isNull(): boolean;

    
    //TODO: Implement the method to check if the flashcard is learned ??? TODO borrar esto, el learned se actualiza en la db
    isLearned(): boolean {
        return this.learned;
    }

    getIdFlashcard(): number {
        return this.id_flashcard;
    }

    getQuestion(): string {
        return this.question;
    }

    getAnswer(): string {
        return this.answer;
    }

    getLearned(): boolean {
        return this.learned;
    }

    getLastDate(): Date {
        return this.last_date;
    }
    
}

export interface FlashcardAttributes {
    id_flashcard: number;
    question: string;
    answer: string;
    learned: boolean;
    last_date: Date;
}


