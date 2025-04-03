import { PlayedDayDoc } from "../../domain/docs/PlayedDaysDoc";
import { AbstractPlayedDay } from "../../domain/model/played_day/AbstractPlayedDay";
import PlayedDay from "../../domain/model/played_day/Pd";
import { PlayedDayInterface } from "../../domain/types/PlayedDaysInterface";

export default class PlayedDayHelper {

    public static endpointToDomain(playedDay: PlayedDayInterface): AbstractPlayedDay {
       
        return new PlayedDay ({
            date: playedDay.date,
            time_played: playedDay.time_played,
            questions_learned: playedDay.questions_learned,
            received_xp: playedDay.received_xp
        });

    }

    public static databaseToDomain(playedDay: PlayedDayDoc): AbstractPlayedDay {
        return new PlayedDay ({
            date: playedDay.date,
            time_played: playedDay.time_played,
            questions_learned: playedDay.questions_learned,
            received_xp: playedDay.received_xp
        });

    }
}
