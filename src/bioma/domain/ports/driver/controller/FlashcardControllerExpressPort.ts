import { Request, Response } from 'express'
export interface FlashcardControllerExpressPort {
   getOrganizedFlashcardsByTopic(_req: Request, res: Response): Promise<void>
   createFlashcards(req: Request, res: Response): Promise<void>
   updateFlashcards(req: Request, res: Response): Promise<void>
   createFlashcardsFromAi(req: Request, res: Response): Promise<void>
   getOrganizedFlashcardsByBiome(req: Request, res: Response): Promise<void>
}