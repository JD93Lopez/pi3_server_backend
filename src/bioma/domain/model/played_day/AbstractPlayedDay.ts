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

}

export interface PlayedDayAttributes {
    date: Date;
    time_played: number;
    questions_learned: number;
    received_xp: number
}