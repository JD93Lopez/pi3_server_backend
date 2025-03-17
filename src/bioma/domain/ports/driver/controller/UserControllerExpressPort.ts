import { Request, Response } from "express";

export default interface UserControllerExpressPort {
    updateUserExperience(req: Request, res: Response): Promise<void>
}