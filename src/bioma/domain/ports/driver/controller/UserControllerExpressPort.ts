import { Request, Response } from "express";

export default interface UserControllerExpressPort {
    createUser(req: Request, res: Response): Promise<void>;
    updateUserExperience(req: Request, res: Response): Promise<void>

    getUserStreak(req: Request, res: Response): Promise<void>
}