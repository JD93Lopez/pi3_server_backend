import { PlayedDaysInterface } from "../types/playedDaysInterface";

export abstract class AbstractPlayedDays {

    protected date: Date;
    protected time_played: number;
    protected questions_learned: number;
    protected received_xp: number;
    
    constructor(dato: PlayedDaysInterface) {
        this.date = dato.date;
        this.time_played = dato.time_played;
        this.questions_learned = dato.questions_learned;
        this.received_xp = dato.received_xp;
    }
    
    abstract isNull(): boolean;

}
