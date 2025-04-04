export default interface CreateFlashcardsFromAiUseCasePort {
    createFlashcardsFromAi(topicId: number, nombreTema: string, descripcion: string, wishedNumberOfCards: number): Promise<any>;
}

