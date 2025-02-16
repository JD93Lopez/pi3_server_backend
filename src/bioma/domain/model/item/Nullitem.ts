import { AbstractItem } from "./AbstractItem";

export class NullUser extends AbstractItem {
    constructor() {
        super(
            -1,
          "/default.png"  ,
            0
        );
    }

    isNull(): boolean {
        return true;
    }


}