export default abstract class AbstractItem {
    
    protected id_item: number;
    protected image: string;
    protected cost: number;
    // TODO añadir campo comprado o no comprado


    constructor(attributes: ItemAtributes) {
        this.id_item = attributes.id_item;
        this.image = attributes.image;
        this.cost = attributes.cost;
    }

    getIdItem(): number {
        return this.id_item;  
    }

    getImage(): string {
        return this.image;
    }

    getCost(): number {
        return this.cost;
    }
    
    abstract isNull(): boolean;
}

export interface ItemAtributes {
    id_item: number;
    image: string;
    cost: number;
}