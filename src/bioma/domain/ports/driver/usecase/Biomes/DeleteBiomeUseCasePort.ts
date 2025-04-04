import { BiomeInterface } from "../../../../types/BiomeInterface";

export default interface DeleteBiomeUseCasePort {
    deleteBiome(id_biome: number): Promise<boolean>
}