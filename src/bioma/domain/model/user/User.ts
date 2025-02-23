import UserAttributes, { AbstractUser } from "./AbstractUser";

export class User extends AbstractUser {

    constructor(userAttributes: UserAttributes) {
        super(userAttributes);
    }

    isNull(): boolean {
        return false;
    }

}



