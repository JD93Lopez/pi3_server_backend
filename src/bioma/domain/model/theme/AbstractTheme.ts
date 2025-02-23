export abstract class AbstractTheme {

    protected id_theme: number;
    protected image: string;

    constructor(id_theme: number, image: string) {
        this.id_theme = id_theme;
        this.image = image;
    }
    
    abstract isNull(): boolean;
}
