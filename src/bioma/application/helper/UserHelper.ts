import { UserDoc } from "../../domain/docs/UserDoc";
import { AbstractUser } from "../../domain/model/user/AbstractUser";
import { User } from "../../domain/model/user/User";
import { UserInterface } from "../../domain/types/UserInterface";

export default class UserHelper {

  endpointToDomainUser(userClient: UserInterface): AbstractUser {
    return new User({
      id_user: userClient.id_user,
      user_name: userClient.user_name,
      email: userClient.email,
      password: userClient.password,
      name: userClient.name,
      pet_name: userClient.pet_name,
      education: userClient.education,
      birthdate: userClient.birthdate,
      telephone: userClient.telephone,
      sex: userClient.sex,
      occupation: userClient.occupation,
      time_played_total: userClient.time_played,
      questions_learned_total: userClient.questions_learned,
      received_xp_total: userClient.received_xp,
      streak: userClient.streak,
      last_date_added: userClient.last_date_added,
      league: userClient.league,
      biomes: []
    });
  }

  databaseToDomainUser(userDoc: UserDoc): AbstractUser {
    return new User({
      id_user: userDoc.id_user,
      user_name: userDoc.user_name,
      email: userDoc.email,
      password: userDoc.password,
      name: userDoc.name,
      pet_name: userDoc.pet_name,
      education: userDoc.education,
      birthdate: userDoc.birthdate,
      telephone: userDoc.telephone,
      sex: userDoc.sex,
      occupation: userDoc.occupation,
      time_played_total: userDoc.time_played,
      questions_learned_total: userDoc.questions_learned,
      received_xp_total: userDoc.received_xp,
      streak: userDoc.streak,
      last_date_added: userDoc.last_date_added,
      league: userDoc.league,
      biomes: []
    });
  }
}
