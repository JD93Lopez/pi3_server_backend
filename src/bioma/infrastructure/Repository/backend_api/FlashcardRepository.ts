import FlashcardDBC from "./dbc/FlashcardDBC"
import { FlashcardInterface } from "../../../domain/types/FlashcardInterface"
import { FlashcardRepositoryPort } from "../../../domain/ports/driven/FlashcardRepositoryPort"

export default class FlashcardRepository implements FlashcardRepositoryPort {
  private readonly citaDBC: FlashcardDBC

  constructor() {
    this.citaDBC = new FlashcardDBC()
  }

  findAll = async (): Promise<FlashcardInterface[]> => {
    
    const citasFromDB = await this.citaDBC.getFlashcards()
    
    return citasFromDB.map((flashcard: FlashcardInterface) => ({
        id_flashcard: flashcard.id_flashcard,
        question: flashcard.question,
        answer: flashcard.answer,
        learned: flashcard.learned,
        last_date: flashcard.last_date
    }))
  }
  
}