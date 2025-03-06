import { PlayedDayDoc } from "../../docs/PlayedDaysDoc";

export default interface PlayedDayRepositoryPort {
    save(playedDay: PlayedDayDoc): Promise<number>;
}
