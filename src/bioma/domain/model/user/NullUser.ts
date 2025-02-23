import { AbstractUser } from "./AbstractUser";


export class NullUser extends AbstractUser {
    constructor() {
        super(
            {
                id_user: 0,
                user_name: "Not a name provided",
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
                league: "Not a league provided"
            }
        );
    }

    isNull(): boolean {
        return true;
    }

}