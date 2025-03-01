import { BiomeDoc } from "../../../domain/docs/BiomeDoc"
import { BiomeRepositoryPort } from "../../../domain/ports/driven/BiomeRepositoryPort"
import BiomeDBC from "./dbc/BiomeDBC"

export default class BiomeRepository implements BiomeRepositoryPort {
    private readonly biomeDBC: BiomeDBC

  constructor() {
    this.biomeDBC = new BiomeDBC()
  }

  async save (biome: BiomeDoc ): Promise<number> {
    const idBiomeFromDBC = await this.biomeDBC.createBiome(biome.name, biome.THEMES_id_theme, biome.USERS_id_user)
    return idBiomeFromDBC
  }

  async getBiomesByUserId (userId: number): Promise<BiomeDoc[]> {
    const biomesFromDBC = await this.biomeDBC.getBiomesByUserId(userId)
    return biomesFromDBC
  }
  

  
}