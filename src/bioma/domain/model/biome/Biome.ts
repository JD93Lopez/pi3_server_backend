import { AbstractBiome, BiomeAttributes } from "./AbstractBiome";

export default class Biome extends AbstractBiome {

    constructor(biomeAttributes: BiomeAttributes) {
        super(biomeAttributes);
    }
    
     isNull(): boolean {
        return false;
     }

}

