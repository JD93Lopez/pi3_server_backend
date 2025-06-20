import { Request, Response } from 'express'
export interface TopicControllerExpressPort {
   createTopic(req: Request, res: Response): Promise<void>
   getTopics(req: Request, res: Response): Promise<void>
   deleteTopic(req: Request, res: Response): Promise<void>
   updateTopic(req: Request, res: Response): Promise<void>
}