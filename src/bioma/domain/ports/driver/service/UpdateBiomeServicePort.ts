import { AbstractBiome } from "../../../model/biome/AbstractBiome";

export interface UpdateBiomeServicePort {
    updateBiome( biome: AbstractBiome ): Promise<number>
}