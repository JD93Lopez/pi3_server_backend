import { AbstractBiome } from "../../../model/biome/AbstractBiome";

export default interface BiomesByUserRetriverServicePort {
    getBiomesByUser(userId: number): Promise<AbstractBiome[]>;
}