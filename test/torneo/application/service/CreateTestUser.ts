import { User } from "../../../../src/bioma/domain/model/user/User";
import { RankName } from "../../../../src/torneo/domain/model/RankName";

export const createTournamentTestUser = (id_user: number, user_name: string, league: RankName) => {
  return new User({
    id_user: id_user,
    user_name: user_name,
    pet_name: "Not a pet name provided",
    email: "Not an email provided",
    password: "Not a password provided",
    name: "Not a name provided",
    education: "Not an education provided",
    birthdate: new Date(),
    telephone: "Not a telephone provided",
    sex: 'N',
    occupation: "Not an occupation provided",
    time_played_total: 0,
    questions_learned_total: 0,
    received_xp_total: 0,
    streak: "Not a streak provided",
    last_date_added: new Date(),
    league: league.toString(),
    biomes: []
  });
}