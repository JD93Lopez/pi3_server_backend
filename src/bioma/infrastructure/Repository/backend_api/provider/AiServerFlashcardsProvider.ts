import AiFlashcards from "../../../../domain/docs/AiFlashcards";

export default class AiServerFlashcardsProvider {

    private readonly baseUrl = 'https://wh37l4d7-5001.use2.devtunnels.ms';

    public async getFlashcardsAiTopicId(TopicId: number): Promise<AiFlashcards> {
        const response = await fetch(`${this.baseUrl}/api/cards/get?cards_id=${TopicId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ai flashcards');
        }
        const data = await response.json();
        return data;
    }

    public async createFlashcardsFromAi(topicId: number, nombreTema: string, descripcion: string, wishedNumberOfCards: number): Promise<any> {
        const response = await fetch(`${this.baseUrl}/api/cards?topicId=${topicId}&topicInfo=Información%20del%20tema:Título%20del%20tema:${nombreTema} Explicación:${descripcion} Número%20de%20tarjetas:${wishedNumberOfCards}`);

        if (!response.ok) {
            throw new Error('Network response was not ok ai flashcards');
        }
        const data = await response.json();
        return data

    }
}