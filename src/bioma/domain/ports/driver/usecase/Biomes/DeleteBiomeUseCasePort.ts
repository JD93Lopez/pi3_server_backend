export default interface DeleteBiomeUseCasePort {
    deleteBiome(id_biome: number): Promise<boolean>
}