import { AbstractTheme } from "./AbstractTheme";

export class NullTheme extends AbstractTheme {
    constructor() {
        super(
            0,
            "/default.png"
        );
    }

    isNull(): boolean {
        return true;
    }


}