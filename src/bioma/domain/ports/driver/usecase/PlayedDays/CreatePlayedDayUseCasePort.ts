import { PlayedDayInterface } from "../../../../types/PlayedDaysInterface";

export default interface CreatePlayedDayUseCasePort {
    createPlayedDay(id_user: number, playedDay: PlayedDayInterface): Promise<number>;
}