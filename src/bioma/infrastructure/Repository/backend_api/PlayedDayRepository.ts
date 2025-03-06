import { PlayedDayDoc } from "../../../domain/docs/PlayedDaysDoc"
import PlayedDayRepositoryPort from "../../../domain/ports/driven/PlayedDayRepositoryPort"
import PlayedDayDBC from "./dbc/PlayedDayDBC"

export default class PlayedDayRepository implements PlayedDayRepositoryPort{

    private readonly playedDayDBC: PlayedDayDBC

    constructor() {
        this.playedDayDBC = new PlayedDayDBC()
    }

    save = async (playedDay: PlayedDayDoc): Promise<any> => {

        const response = await this.playedDayDBC.createPlayedDay(playedDay.date, playedDay.time_played, playedDay.questions_learned, playedDay.received_xp, playedDay.USERS_id_user)
        return response
    
    }
}