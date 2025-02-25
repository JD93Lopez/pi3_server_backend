import FlashcardDBC from "./dbc/FlashcardDBC"
import { FlashcardDoc } from "../../../domain/docs/FlashcardDoc"
import { FlashcardRepositoryPort } from "../../../domain/ports/driven/FlashcardRepositoryPort"

export default class FlashcardRepository implements FlashcardRepositoryPort {
  private readonly citaDBC: FlashcardDBC

  constructor() {
    this.citaDBC = new FlashcardDBC()
  }

  findAll = async (): Promise<FlashcardDoc[]> => {
    
    const citasFromDB = await this.citaDBC.getFlashcards()
    
    return citasFromDB.map((flashcard: FlashcardDoc) => ({
        id_flashcard: flashcard.id_flashcard,
        question: flashcard.question,
        answer: flashcard.answer,
        learned: flashcard.learned,
        last_date: flashcard.last_date
    }))
  }

  findByTopic = async (topic_id: number): Promise<FlashcardDoc[]> => {
    
    const citasFromDB = await this.citaDBC.getFlashcardsByTopic(topic_id)
    
    return citasFromDB.map((flashcard: FlashcardDoc) => ({
        id_flashcard: flashcard.id_flashcard,
        question: flashcard.question,
        answer: flashcard.answer,
        learned: flashcard.learned,
        last_date: flashcard.last_date
    }))
  }
  
}