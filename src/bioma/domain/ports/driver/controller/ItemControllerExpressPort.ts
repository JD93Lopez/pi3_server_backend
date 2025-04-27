import { Request, Response } from "express";

export default interface ItemControllerExpressPort{
    buyItem(req: Request, res: Response): Promise<void>;
    getStoreItems(req: Request, res: Response): Promise<void>;
}