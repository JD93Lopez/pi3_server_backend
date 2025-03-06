import { Request, Response } from "express";
import PlayedDayControllerExpressPort from "../../../domain/ports/driver/controller/PlayedDayControllerExpressPort";
import CreatePlayedDayUseCasePort from "../../../domain/ports/driver/usecase/CreatePlayedDayUseCasePort";
import CreatePlayedDayInterface from "../../../domain/types/endpoint/CreatePlayedDay";

export default class PlayedDayControllerExpress implements PlayedDayControllerExpressPort{
        
    constructor(private createPlayedDayUseCase: CreatePlayedDayUseCasePort){}
    
    public async createPlayedDay(req: Request, res: Response): Promise<void> {
    
        try {

            const body = req.body;   
            let CreatePlayedDayInterface = null;
            
            if(!body) {
                res.status(400).json({ message: 'Bad request body' })  
            }

            try {
                CreatePlayedDayInterface = body as CreatePlayedDayInterface
            } catch (error) {
                res.status(400).json({ message: 'Bad request interface' })
            }
            if(!CreatePlayedDayInterface) {
                res.status(400).json({ message: 'Bad request interface' })  
                return
            }

            if (!CreatePlayedDayInterface.id_user || !CreatePlayedDayInterface.playedDay) {
                res.status(400).json({ message: 'Bad request: missing fields' });
                return;
            }

            const { id_user, playedDay } = CreatePlayedDayInterface;

            const playedDayCreated = await this.createPlayedDayUseCase.createPlayedDay(id_user, playedDay);
            
            if(!playedDayCreated) {
                res.status(201).json({ message: 'Played day created', data: playedDayCreated });
            }

        } catch (error: any) {
            
            console.error('Error creating played day:', error);
            res.status(500).json({ message: 'Internal server error' });

        }

    }
}