import { BiomeInterface } from "../../../types/BiomeInterface";

export interface CreateBiomeUseCasePort {
    createBiome(id_user: number, biome: BiomeInterface): Promise<number>
}