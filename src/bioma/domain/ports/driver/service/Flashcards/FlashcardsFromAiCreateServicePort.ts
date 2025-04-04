export default interface FlashcardsFromAiCreateServicePort {
    createFlashcardsFromAi(topicId: number, nombreTema: string, descripcion: string, wishedNumberOfCards: number): Promise<any>
}

