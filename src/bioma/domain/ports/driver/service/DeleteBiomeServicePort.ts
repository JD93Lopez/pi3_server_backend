import { AbstractBiome } from "../../../model/biome/AbstractBiome";

export interface DeleteBiomeServicePort {
    deleteBiome( id_user: number, biome: AbstractBiome ): Promise<boolean>
}