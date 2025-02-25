import { Request, Response } from "express"
import { CreateTopicUseCasePort } from "../../../domain/ports/driver/usecase/CreateTopicUseCasePort"
import CreateTopicInterface from "../../../domain/types/CreateTopicInterface"

export default class FlashcardControllerExpress {
  constructor(
    private readonly createTopicUseCase: CreateTopicUseCasePort,
  ) {}

  public async createTopic(req: Request, res: Response): Promise<void> {
    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }
    //cast to interface
    let createTopicInterface = null
    try {
      createTopicInterface = body as CreateTopicInterface
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' })
    }
    if(!createTopicInterface) {
      res.status(400).json({ message: 'Bad request interface' })
      return
    }
    //validate
    const topic = createTopicInterface.topic
    if(!topic) {
      res.status(400).json({ message: 'Bad request topic' })
    }
    const biome_id = createTopicInterface.biome_id
    if(!biome_id) {
      res.status(400).json({ message: 'Bad request biome_id' })
    }
    
    const id = await this.createTopicUseCase.createTopic(biome_id, topic)

    res.status(200).json({ message: 'Success', data: id })
  }
  
}
