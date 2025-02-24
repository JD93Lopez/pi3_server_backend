import { Request, Response } from 'express'
export interface FlashcardControllerExpressPort {
   getOrganizedFlashcardsByTopic(_req: Request, res: Response): Promise<void>
   createFlashcards(_req: Request, res: Response): Promise<void>
}