import { Request, Response } from "express";
export default interface BiomeControllerExpressPort {
    createBiome(req: Request, res: Response): Promise<void>;
    updateBiome(req: Request, res: Response): Promise<void>
    deleteBiome(req: Request, res: Response): Promise<void>
    getBiomesByUser(req: Request, res: Response): Promise<void>;
}