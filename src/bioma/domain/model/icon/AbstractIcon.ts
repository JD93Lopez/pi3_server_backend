export abstract class AbstractIcon {
    
    protected id_icon: number;
    protected image: string;

    constructor(id_icon: number, image: string) {
        this.id_icon = id_icon;
        this.image = image;
    }

    getIdIcon(): number {
        return this.id_icon;  
    }

    getImage(): string {
        return this.image;
    }
    
    abstract isNull(): boolean;
}
