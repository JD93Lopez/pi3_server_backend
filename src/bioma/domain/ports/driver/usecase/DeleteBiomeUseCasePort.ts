import { BiomeInterface } from "../../../types/BiomeInterface";

export default interface DeleteBiomeUseCasePort {
    deleteBiome(id_user: number, biome: BiomeInterface): Promise<boolean>
}