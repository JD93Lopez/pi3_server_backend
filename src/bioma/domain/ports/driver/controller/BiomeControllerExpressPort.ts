import { Request, Response } from "express";
export default interface BiomeControllerExpressPort {
    createBiome(req: Request, res: Response): Promise<void>;
}