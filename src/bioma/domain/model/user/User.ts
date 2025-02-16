import { UserInterface } from "../types/userInterface";
import { abstractUser } from "./AbstractUser";

export class User  extends abstractUser {

    constructor(userAttributes: UserInterface) {
        super(userAttributes);
    }

    isNull(): boolean {
        return false;
    }

}