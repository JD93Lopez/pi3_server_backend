import { AbstractBiome } from "../../../model/biome/AbstractBiome";

export interface UpdateBiomeServicePort {
    updateBiome( id_user: number, biome: AbstractBiome ): Promise<number>
}