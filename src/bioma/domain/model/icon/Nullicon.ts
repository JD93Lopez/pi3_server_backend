import { AbstractIcon } from "./AbstractIcon";

export class NullIcon extends AbstractIcon {

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