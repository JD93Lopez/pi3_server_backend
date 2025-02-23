import { AbstractItem } from "./AbstractItem";

export class NullItem extends AbstractItem {
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