import { Request, Response } from "express"
import { GetOrganizedFlashcardsByTopicUseCasePort } from "../../../domain/ports/driver/usecase/GetOrganizedFlashcardsByTopicUseCasePort"
import { FlashcardControllerExpressPort } from "../../../domain/ports/driver/controller/FlashcardControllerExpressPort"
import GetOrganizedFlashcardsByTopicInterface from "../../../domain/types/endpoint/GetOrganizedFlashcardsByTopicInterface"
import { CreateFlashcardsUseCasePort } from "../../../domain/ports/driver/usecase/CreateFlashcardsUseCasePort"
import CreateFlashcardsInterface from "../../../domain/types/endpoint/CreateFlashcards"
import UpdateFlashcardsUseCasePort from "../../../domain/ports/driver/usecase/UpdateFlashcardsUseCasePort"
import UpdateFlashcardsInterface from "../../../domain/types/endpoint/UpdateFlashcards"

export default class FlashcardControllerExpress implements FlashcardControllerExpressPort
{
  constructor(
    private readonly organizeUseCase: GetOrganizedFlashcardsByTopicUseCasePort,
    private readonly createFlashcardsUseCase: CreateFlashcardsUseCasePort,
    private readonly updateFlashcardsUseCase: UpdateFlashcardsUseCasePort

  ) {}


  public async getOrganizedFlashcardsByTopic(req: Request, res: Response): Promise<void> {

    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }
    let getOrganizedInterface = null
    try {
      getOrganizedInterface = body as GetOrganizedFlashcardsByTopicInterface
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' })
    }
    if(!getOrganizedInterface) {
      res.status(400).json({ message: 'Bad request interface' })
      return
    }
    const id_topic = getOrganizedInterface.topic_id
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
    let createFlashcardsInterface = null;
    try {
      createFlashcardsInterface = body as CreateFlashcardsInterface
    }
    catch (error) {
      res.status(400).json({ message: 'Bad request interface' })
    }
    if(!createFlashcardsInterface) {
      res.status(400).json({ message: 'Bad request interface' })
      return
    }
    const topic = createFlashcardsInterface.topic
    if(!topic) {
      res.status(400).json({ message: 'Bad request topic' })
    }
    
    const ids = await this.createFlashcardsUseCase.createFlashcards(topic);
    
    res.status(200).json({ message: 'Success', data: ids })
  }


  public async updateFlashcards(req: Request, res: Response): Promise<void> {
    
    let updateFlashcardsInterface = null;
    const body = req.body;
    if (!body) {
      res.status(400).json({ message: 'Bad request body' });
      return;
    }

    try {
      updateFlashcardsInterface = body as UpdateFlashcardsInterface; // Assuming the interface is similar
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' });
      return;
    }

    if (!updateFlashcardsInterface) {
      res.status(400).json({ message: 'Bad request interface' });
      return;
    }

    const flashcards = updateFlashcardsInterface.Flashcards;
    if (!flashcards) {
      res.status(400).json({ message: 'Bad request flashcards' });
      return;
    }
    
    try {
      const updatedFlashcards = await this.updateFlashcardsUseCase.updateFlashcards(flashcards); 
      res.status(200).json({ message: 'Success', data: updatedFlashcards });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error });
    }
  }

  
}
