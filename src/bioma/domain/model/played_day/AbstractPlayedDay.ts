export abstract class AbstractPlayedDay {

    protected date: Date;
    protected time_played: number;
    protected questions_learned: number;
    protected received_xp: number;
    
    constructor(dato: PlayedDayAttributes) {
        this.date = dato.date;
        this.time_played = dato.time_played;
        this.questions_learned = dato.questions_learned;
        this.received_xp = dato.received_xp;
    }
    
    abstract isNull(): boolean;

    getDate(): Date {
        return this.date;
    }

    getTimePlayed(): number {
        return this.time_played;
    }

    getQuestionsLearned(): number {
        return this.questions_learned;
    }

    getReceivedXp(): number {
        return this.received_xp;
    }

}

export interface PlayedDayAttributes {
    date: Date;
    time_played: number;
    questions_learned: number;
    received_xp: number
}