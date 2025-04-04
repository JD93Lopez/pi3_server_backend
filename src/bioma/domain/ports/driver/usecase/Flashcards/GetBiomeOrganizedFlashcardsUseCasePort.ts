export default interface GetOrganizedFlashcardsByBiomeUseCasePort {
    getOrganizedFlashcards(id_biome: number): Promise<any>
}