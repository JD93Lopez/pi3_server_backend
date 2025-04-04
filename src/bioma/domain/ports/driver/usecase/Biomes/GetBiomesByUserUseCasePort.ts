import { AbstractBiome } from "../../../../model/biome/AbstractBiome";

export default interface GetBiomesByUserUseCasePort { 
    getBiomesByUser(userId: number): Promise<AbstractBiome[]>
}