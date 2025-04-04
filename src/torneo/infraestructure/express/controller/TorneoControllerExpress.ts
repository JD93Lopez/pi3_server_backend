import { Request, Response } from "express";
import TorneoControllerExpressPort from "../../../domain/ports/driver/controller/TorneoControllerExpressPort";
import InscribirTorneoUseCasePort from "../../../domain/ports/driver/usecase/InscribirTorneoUseCasePort";
import InscribirTorneoInterface from "../../../domain/types/endpoints/InscribirTorneoInterface";

export default class TorneoControllerExpress implements TorneoControllerExpressPort {
    
    constructor(private readonly inscribirTorneoUseCase: InscribirTorneoUseCasePort) {}
    

    public async inscribirTorneo(req: Request, res: Response): Promise<void> {
        let inscribirTorneoInterface = null;
        const body = req.body;

        if (!body) {
            res.status(400).json({ message: 'Bad request body' });
            return;
        }

        try {
            inscribirTorneoInterface = body as InscribirTorneoInterface;
        } catch (error) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        if (!inscribirTorneoInterface) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        const user = inscribirTorneoInterface.user;
        if (!user) {
            res.status(400).json({ message: 'Bad request user' });
            return;
        }

        try {
            const response = await this.inscribirTorneoUseCase.inscribirTorneo(user);

            res.status(200).json({ message: 'Success', data: response });
        }catch (error) {
            console.error("Error inscribiendo torneo:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

  

    
}