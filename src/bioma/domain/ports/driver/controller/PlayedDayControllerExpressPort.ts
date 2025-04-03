import { Request, Response } from "express";

export default interface PlayedDayControllerExpressPort {
    createPlayedDay(req: Request, res: Response): Promise<void>
    getLast31Days(req: Request, res: Response): Promise<void>;

}