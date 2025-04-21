import AbstractItem from "./AbstractItem";

export class NullItem extends AbstractItem {
    constructor() {
        super({
            id_item: -1,
            image: "/default.png"  ,
            cost: 0,
            owned: false
        });
    }

    isNull(): boolean {
        return true;
    }


}