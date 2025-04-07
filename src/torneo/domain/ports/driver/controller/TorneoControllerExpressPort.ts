import { Request, Response } from "express";

export default interface TorneoControllerExpressPort {
    inscribirTorneo(req: Request, res: Response): Promise<void>;
    getParticipantesSala(req: Request, res: Response): Promise<void>;
}