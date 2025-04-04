import { PlayedDayDoc } from "../../docs/PlayedDaysDoc";

export default interface PlayedDayRepositoryPort {
    save(playedDay: PlayedDayDoc): Promise<any>;
    update(playedDay: PlayedDayDoc): Promise<number>;
    getLast31Days(USERS_id_user: number): Promise<PlayedDayDoc[]>;
}
