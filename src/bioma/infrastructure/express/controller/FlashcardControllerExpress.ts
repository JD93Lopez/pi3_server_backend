import { Request, Response } from "express"
import { GetOrganizedFlashcardsByTopicUseCasePort } from "../../../domain/ports/driver/usecase/GetOrganizedFlashcardsByTopicUseCasePort"
import { FlashcardControllerExpressPort } from "../../../domain/ports/driver/controller/FlashcardControllerExpressPort"

export default class FlashcardControllerExpress implements FlashcardControllerExpressPort
{
  constructor(
    private readonly organizeUseCase: GetOrganizedFlashcardsByTopicUseCasePort,
  ) {}

  public async getOrganizedFlashcardsByTopic(req: Request, res: Response): Promise<void> {

    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }
    const id_topic = body.id_topic
    if(!id_topic) {
      res.status(400).json({ message: 'Bad request id topic' })
    }

    const flashcards = await this.organizeUseCase.getOrganizedFlashcards(id_topic)

    res.status(200).json({ message: 'Success', data: flashcards })
  }

  public async createFlashcards(req: Request, res: Response): Promise<void> {
    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }
    const topic = body.topic
    if(!topic) {
      res.status(400).json({ message: 'Bad request topic' })
    }
    

    res.status(200).json({ message: 'Success' })
  }
  
}
