export default abstract class AbstractItem {
    
    protected id_item: number;
    protected image: string;
    protected cost: number;
    protected owned: boolean;
    protected selected?: number;

    constructor(attributes: ItemAtributes) {
        this.id_item = attributes.id_item;
        this.image = attributes.image;
        this.cost = attributes.cost;
        this.owned = attributes.owned;
        this.selected = attributes.selected ?? 0;
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

    getSelected(): number | undefined {
        return this.selected;
    }
    setSelected(selected: number): void {   
        this.selected = selected;
    }
    
    abstract isNull(): boolean;
}

export interface ItemAtributes {
    id_item: number;
    image: string;
    cost: number;
    owned: boolean;
    selected?: number;
}