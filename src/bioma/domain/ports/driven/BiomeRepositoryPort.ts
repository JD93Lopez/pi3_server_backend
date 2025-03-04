import { BiomeDoc } from "../../docs/BiomeDoc";

export interface BiomeRepositoryPort {
    save (biome: BiomeDoc): Promise<number>
    update (biome: BiomeDoc): Promise<number>
    delete (id_biome: number): Promise<boolean>
    getBiomesByUserId (userId: number): Promise<BiomeDoc[]>
}