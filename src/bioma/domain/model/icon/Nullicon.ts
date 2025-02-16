import { AbstractIcon } from "./AbstractIcon";

export class NullkIcon extends AbstractIcon {

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