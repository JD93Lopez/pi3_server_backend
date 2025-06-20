import { Request, Response } from "express"
import { CreateTopicUseCasePort } from "../../../domain/ports/driver/usecase/Topics/CreateTopicUseCasePort"
import CreateTopicInterface from "../../../domain/types/endpoint/Topics/CreateTopicInterface"
import { TopicControllerExpressPort } from "../../../domain/ports/driver/controller/TopicControllerExpressPort"
import { GetTopicByBiomeUseCasePort } from "../../../domain/ports/driver/usecase/Topics/GetTopicByBiomeUseCasePort"
import GetTopicsByBiomeInterface from "../../../domain/types/endpoint/Topics/GetTopicsByBiomeInterface"
import DeleteTopicByIdUseCasePort from "../../../domain/ports/driver/usecase/Topics/DeleteTopicByIdUseCasePort"
import DeleteTopicByIdInterface from "../../../domain/types/endpoint/Topics/DeleteTopicByIdInterface"
import UpdateTopicUseCasePort from "../../../domain/ports/driver/usecase/Topics/UpdateTopicUseCasePort"
import UpdateTopicInterface from "../../../domain/types/endpoint/Topics/UpdateTopicInterface"

export default class TopicControllerExpress implements TopicControllerExpressPort {
  constructor(
    private readonly createTopicUseCase: CreateTopicUseCasePort,
    private readonly getTopicsByBiomeUseCase: GetTopicByBiomeUseCasePort,
    private readonly deleteTopicUseCase: DeleteTopicByIdUseCasePort,
    private readonly updateTopicUseCase: UpdateTopicUseCasePort
  ) {}

  public async createTopic(req: Request, res: Response): Promise<void> {
    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' });
      return;
    }
    //cast to interface
    let createTopicInterface = null
    try {
      createTopicInterface = body as CreateTopicInterface
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' });
      return;
    }
    if(!createTopicInterface) {
      res.status(400).json({ message: 'Bad request interface' });
      return;
    }
    //validate
    const topic = createTopicInterface.topic
    if(!topic) {
      res.status(400).json({ message: 'Bad request topic' });
      return;
    }
    const biome_id = createTopicInterface.biome_id
    if(!biome_id) {
      res.status(400).json({ message: 'Bad request biome_id' });
      return;
    }
    
    const id = await this.createTopicUseCase.createTopic(biome_id, topic) 

    res.status(200).json({ message: 'Success', data: id })
  }

  public async getTopics(req: Request, res: Response): Promise<void> {
    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }
    //cast to interface
    let getTopicsInterface = null
    try {
      getTopicsInterface = body as GetTopicsByBiomeInterface
    } catch (error) {
      res.status(400).json({ message: 'Bad request number' })
    }
    if(!getTopicsInterface) {
      res.status(400).json({ message: 'Bad request number' })
      return
    }
    //validate
    const biome_id = getTopicsInterface.biome_id
    if(!biome_id) {
      res.status(400).json({ message: 'Bad request biome_id' })
    }
    const topics = await this.getTopicsByBiomeUseCase.getTopicsByBiome(biome_id)
    res.status(200).json({ message: 'Success', data: topics })
  }
  
  public async deleteTopic(req: Request, res: Response): Promise<void> {
  
    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }
    //cast to interface
    let deleteTopicInterface = null
    try {
      deleteTopicInterface = body as DeleteTopicByIdInterface
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' })
    }
    if(!deleteTopicInterface) {
      res.status(400).json({ message: 'Bad request interface' })
      return
    } 

    const id = deleteTopicInterface.id_topic
    if(!id) {
      res.status(400).json({ message: 'Bad request id_topic' })
    }
    const result= await this.deleteTopicUseCase.deleteTopicById(id)
    if(!result) {
      res.status(400).json({ message: 'Bad request result' })
    }

    res.status(200).json({ message: 'Success', data: result })
  }

  public async updateTopic(req: Request, res: Response): Promise<void> {
    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }

    let updateTopicInterface = null
    try {
      updateTopicInterface = body as UpdateTopicInterface
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' })
    }
    if(!updateTopicInterface) {
      res.status(400).json({ message: 'Bad request interface' })
      return
    }
    //validate
    const topic = updateTopicInterface.topic
    if(!topic) {
      res.status(400).json({ message: 'Bad request topic' })
    }

    const id = await this.updateTopicUseCase.updateTopic(topic)

    res.status(200).json({ message: 'Success', data: id })
  }
}
