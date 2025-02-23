import { AbstractPlayedDay } from "./AbstractPlayedDay";

export class NullPlayedDay extends AbstractPlayedDay {
    constructor() {
        super(
            {
                date: new Date('1920-01-01'),
                time_played: 0,
                questions_learned: 0,
                received_xp: 0
            }
        );
    }

    isNull(): boolean {
        return true;
    }


}