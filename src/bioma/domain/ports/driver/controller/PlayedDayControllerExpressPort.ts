import { Request, Response } from "express";

export default interface PlayedDayControllerExpressPort {
    createPlayedDay(req: Request, res: Response): Promise<void>
    getLast31Days(req: Request, res: Response): Promise<void>;
    getPlayedDaysByDate(req: Request, res: Response): Promise<void>;
    getUserPlayStats(req: Request, res: Response): Promise<void>;
}