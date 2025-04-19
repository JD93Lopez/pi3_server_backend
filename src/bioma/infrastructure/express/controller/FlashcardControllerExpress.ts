import { Request, Response } from "express"
import { GetOrganizedFlashcardsByTopicUseCasePort } from "../../../domain/ports/driver/usecase/Flashcards/GetOrganizedFlashcardsByTopicUseCasePort"
import { FlashcardControllerExpressPort } from "../../../domain/ports/driver/controller/FlashcardControllerExpressPort"
import GetOrganizedFlashcardsByTopicInterface from "../../../domain/types/endpoint/Flashcards/GetOrganizedFlashcardsByTopicInterface"
import { CreateFlashcardsUseCasePort } from "../../../domain/ports/driver/usecase/Flashcards/CreateFlashcardsUseCasePort"
import CreateFlashcardsInterface from "../../../domain/types/endpoint/Flashcards/CreateFlashcards"
import UpdateFlashcardsUseCasePort from "../../../domain/ports/driver/usecase/Flashcards/UpdateFlashcardsUseCasePort"
import UpdateFlashcardsInterface from "../../../domain/types/endpoint/Flashcards/UpdateFlashcards"
import CreateFlashcardsFromAiUseCasePort from "../../../domain/ports/driver/usecase/Flashcards/CreateFlashcardsFromAiUseCasePort"
import CreateFlashcardsFromAi from "../../../domain/types/endpoint/Flashcards/CreateFlashcardsFromAi"
import GetOrganizedFlashcardsByBiomeUseCase from "../../../application/usecase/Flashcards/GetBiomeOrganizedFlashcardsUseCase"
import GetOrganizedFlashcardsByBiomeInterface from "../../../domain/types/endpoint/Flashcards/GetOrganizedFlashcardsByBiomeInterface"

export default class FlashcardControllerExpress implements FlashcardControllerExpressPort
{
  constructor(
    private readonly organizeUseCase: GetOrganizedFlashcardsByTopicUseCasePort,
    private readonly createFlashcardsUseCase: CreateFlashcardsUseCasePort,
    private readonly updateFlashcardsUseCase: UpdateFlashcardsUseCasePort,
    private readonly createFlashcardsFromAiUseCase: CreateFlashcardsFromAiUseCasePort,
    private readonly getFlashcardsByBiomeUseCase: GetOrganizedFlashcardsByBiomeUseCase
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

    const flashcards = updateFlashcardsInterface.flashcards;
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

  public async createFlashcardsFromAi(req: Request, res: Response): Promise<void> {
    
    const body = req.body;
    if (!body) {
      res.status(400).json({ message: 'Bad request body' });
      return;
    }


    let createFlashcardsFromAiInterface = null;
    try {
      createFlashcardsFromAiInterface = body as CreateFlashcardsFromAi;
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' });
      return;
    }


    if (!createFlashcardsFromAiInterface) {
      res.status(400).json({ message: 'Bad request interface' });
      return;
    }


    const topicId = createFlashcardsFromAiInterface.topicId;
    if (!topicId) {
      res.status(400).json({ message: 'Bad request topicId' });
      return;
    }

    const nombreTema = createFlashcardsFromAiInterface.nombreTema;
    if (!nombreTema) {
      res.status(400).json({ message: 'Bad request nombreTema' });
      return;
    }

    const descripcionTema = createFlashcardsFromAiInterface.descripcion;
    if (!descripcionTema) {
      res.status(400).json({ message: 'Bad request descripcion' });
      return;
    }

    const wishedNumberOfCards = createFlashcardsFromAiInterface.wishedNumberOfCards;
    if (!wishedNumberOfCards) {
      res.status(400).json({ message: 'Bad request wishedNumberOfCards' });
      return;
    }


    try {
      const response = await this.createFlashcardsFromAiUseCase.createFlashcardsFromAi(topicId, nombreTema, descripcionTema, wishedNumberOfCards);


      res.status(200).json({ message: 'Success', data: response });
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error });
    }
  }

  
  public async getOrganizedFlashcardsByBiome(req: Request, res: Response): Promise<void> {
    
    const body = req.body
    if(!body) {
      res.status(400).json({ message: 'Bad request body' })  
    }
    let getOrganizedInterface = null
    try {
      getOrganizedInterface = body as GetOrganizedFlashcardsByBiomeInterface
    } catch (error) {
      res.status(400).json({ message: 'Bad request interface' })
    }
    if(!getOrganizedInterface) {
      res.status(400).json({ message: 'Bad request interface' })
      return
    }
    const biome_id = getOrganizedInterface.biome_id
    if(!biome_id) {
      res.status(400).json({ message: 'Bad request id topic' })
    }

    const flashcards = await this.getFlashcardsByBiomeUseCase.getOrganizedFlashcards(biome_id)

    res.status(200).json({ message: 'Success', data: flashcards })
  }

  
}
