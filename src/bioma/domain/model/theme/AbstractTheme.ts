export abstract class AbstractTheme {

    protected id_item: number;
    protected image: string;

    constructor(id_item: number, image: string) {
        this.id_item = id_item;
        this.image = image;
    }
    
    abstract isNull(): boolean;
}
