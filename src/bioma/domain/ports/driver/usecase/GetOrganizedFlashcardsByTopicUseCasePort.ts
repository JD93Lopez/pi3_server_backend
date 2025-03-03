export interface GetOrganizedFlashcardsByTopicUseCasePort {
    getOrganizedFlashcards(id_topic: number): Promise<any>
}