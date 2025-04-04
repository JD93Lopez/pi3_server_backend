import { AbstractBiome } from "../../../../model/biome/AbstractBiome";

export interface CreateBiomeServicePort {
    createBiome( id_user: number, biome: AbstractBiome ): Promise<number>
}