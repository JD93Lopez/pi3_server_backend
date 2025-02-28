import { NullTheme } from "../theme/NullTheme";
import { AbstractBiome } from "./AbstractBiome";

export default class NullBiome extends AbstractBiome {
     
    constructor() {
        super(
            {
                id_biome: 0,
                name: "",
                theme: new NullTheme(),
                topics: []
            }
        );
    }

    isNull(): boolean {
        return true;
    }
}

