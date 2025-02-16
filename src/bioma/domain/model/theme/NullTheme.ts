import { AbstractTheme } from "./AbstractTheme";

export class NullUser extends AbstractTheme {
    constructor() {
        super(
            -1,
            "/default.png"
        );
    }

    isNull(): boolean {
        return true;
    }


}