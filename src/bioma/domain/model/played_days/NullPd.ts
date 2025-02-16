import { AbstractPlayedDays } from "./AbstractPlayedDays";

export class NullPlayedDays extends AbstractPlayedDays {
    constructor() {
        super(
            {
                date: new Date(),
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