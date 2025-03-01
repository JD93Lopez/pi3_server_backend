import { BiomeDoc } from "../../docs/BiomeDoc";

export interface BiomeRepositoryPort {
    save (biome: BiomeDoc): Promise<number>
}