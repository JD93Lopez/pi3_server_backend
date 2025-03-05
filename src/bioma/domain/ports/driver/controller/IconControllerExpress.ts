import { Request, Response } from "express";

export interface IconControllerExpressPort {
  getAllIcons(req: Request, res: Response): Promise<void>;
}