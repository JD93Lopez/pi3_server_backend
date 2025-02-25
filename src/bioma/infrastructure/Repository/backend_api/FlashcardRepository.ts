import FlashcardDBC from "./dbc/FlashcardDBC"
import { FlashcardDoc } from "../../../domain/docs/FlashcardDoc"
import { FlashcardRepositoryPort } from "../../../domain/ports/driven/FlashcardRepositoryPort"

export default class FlashcardRepository implements FlashcardRepositoryPort {
  private readonly flashcardDBC: FlashcardDBC

  constructor() {
    this.flashcardDBC = new FlashcardDBC()
  }

  findAll = async (): Promise<FlashcardDoc[]> => {
    
    const citasFromDB = await this.flashcardDBC.getFlashcards()
    
    return citasFromDB.map((flashcard: FlashcardDoc) => ({
        id_flashcard: flashcard.id_flashcard,
        question: flashcard.question,
        answer: flashcard.answer,
        learned: flashcard.learned,
        last_date: flashcard.last_date
    }))
  }

  findByTopic = async (topic_id: number): Promise<FlashcardDoc[]> => {
    
    const citasFromDB = await this.flashcardDBC.getFlashcardsByTopic(topic_id)
    
    return citasFromDB.map((flashcard: FlashcardDoc) => ({
        id_flashcard: flashcard.id_flashcard,
        question: flashcard.question,
        answer: flashcard.answer,
        learned: flashcard.learned,
        last_date: flashcard.last_date
    }))
  }

  save = async (flashcard: FlashcardDoc): Promise<number> => {
    
    const flashcardIdFromDB = await this.flashcardDBC.createFlashcard(flashcard.question, flashcard.answer, flashcard.learned, flashcard.TOPICS_id_topic); 
    return flashcardIdFromDB;  
      
  }
}