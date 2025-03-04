import { BiomeInterface } from "../../../types/BiomeInterface";

export default interface UpdateBiomeUseCasePort{
    updateBiome(id_user: number, biome: BiomeInterface): Promise<number>
}