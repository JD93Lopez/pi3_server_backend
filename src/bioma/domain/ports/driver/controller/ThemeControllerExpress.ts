import { Request, Response } from "express";

export interface ThemeControllerExpressPort {
    getAllThemes(req: Request, res: Response): Promise<void>
}