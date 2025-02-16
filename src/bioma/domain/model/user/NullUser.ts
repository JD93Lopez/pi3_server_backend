import { abstractUser } from "./AbstractUser";

export class NullUser extends abstractUser {
    constructor() {
        super(
            {
                id_user: -1, 
                user_name: "None",
                password: "None",
                name: "None", 
                email: "None"
            }
        );
    }

    isNull(): boolean {
        return true;
    }

}