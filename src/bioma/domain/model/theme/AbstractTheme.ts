export abstract class AbstractTheme {

    protected id_theme: number;
    protected image: string;

    constructor(id_theme: number, image: string) {
        this.id_theme = id_theme;
        this.image = image;
    }

    getIdTheme(): number {
        return this.id_theme;  
    }

    getImage(): string {
        return this.image;
    }
    
    abstract isNull(): boolean;
}
