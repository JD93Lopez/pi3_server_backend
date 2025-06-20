import AiFlashcards, { errorAiFlashcards } from "../../../../domain/docs/AiFlashcards";

export default class AiServerFlashcardsProvider {

    private readonly baseUrl = 'http://127.0.0.1:5001';

    public async getFlashcardsAiTopicId(TopicId: number): Promise<AiFlashcards> {
        try {
            const response = await fetch(`${this.baseUrl}/api/cards/get?cards_id=${TopicId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok ai flashcards');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching flashcards by topic ID');
            return errorAiFlashcards;
        }
    }

    public async createFlashcardsFromAi(topicId: number, nombreTema: string, descripcion: string, wishedNumberOfCards: number): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/api/cards?topicId=${topicId}&topicInfo=Información%20del%20tema:Título%20del%20tema:${nombreTema} Explicación:${descripcion} Número%20de%20tarjetas:${wishedNumberOfCards}`);
            if (!response.ok) {
                throw new Error('Network response was not ok ai flashcards');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating flashcards from AI');
            return -1;
        }
    }
}