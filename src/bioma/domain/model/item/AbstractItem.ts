export abstract class AbstractItem {
    
    protected id_item: number;
    protected image: string;
    protected cost: number;


    constructor(id_item: number, image: string, cost: number) {
        this.id_item = id_item;
        this.image = image;
        this.cost = cost;
    }
    
    abstract isNull(): boolean;
}
