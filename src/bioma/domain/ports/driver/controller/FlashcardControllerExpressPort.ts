import { Request, Response } from 'express'
export interface FlashcardControllerExpressPort {
   getOrganizedFlashcards(_req: Request, res: Response): Promise<void>
}