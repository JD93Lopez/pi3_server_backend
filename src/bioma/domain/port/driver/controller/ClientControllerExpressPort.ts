import { Request, Response } from 'express'

export default interface ClientControllerExpressPort {
  clientVerify(req: Request, res: Response): Promise<void>
  clientCreate(req: Request, res: Response): Promise<void>
}