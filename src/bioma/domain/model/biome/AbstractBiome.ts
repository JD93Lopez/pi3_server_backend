import { AbstractTheme } from "../theme/AbstractTheme";
import { AbstractTopic } from "../topic/AbstractTopic";

export abstract class AbstractBiome {
    
    protected id_biome: number;
    protected name: string;
    protected theme: AbstractTheme;
    protected topics: AbstractTopic[];

    constructor(biomeAttributes: BiomeAttributes) {
        this.id_biome = biomeAttributes.id_biome;
        this.name = biomeAttributes.name;
        this.theme = biomeAttributes.theme;
        this.topics = biomeAttributes.topics;
    }

    getIdBiome(): number {
        return this.id_biome;  
    }

    getName(): string {
        return this.name;
    }   

    getTheme(): AbstractTheme {
        return this.theme;
    }

    getTopics(): AbstractTopic[] {
        return this.topics;
    }

    abstract isNull(): boolean;
}

export interface BiomeAttributes {
    id_biome: number;
    name: string;
    theme: AbstractTheme;
    topics: AbstractTopic[];
}