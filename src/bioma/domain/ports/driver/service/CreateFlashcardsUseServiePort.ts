export interface CreateFlashcardsUseCasePort {
    createFlashcards(topic: any): Promise<number[]>
}