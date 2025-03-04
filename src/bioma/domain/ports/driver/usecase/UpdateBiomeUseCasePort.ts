import { BiomeInterface } from "../../../types/BiomeInterface";

export default interface UpdateBiomeUseCasePort{
    updateBiome(biome: BiomeInterface): Promise<number>
}