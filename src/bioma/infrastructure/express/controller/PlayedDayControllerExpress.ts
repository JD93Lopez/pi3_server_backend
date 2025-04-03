import { Request, Response } from "express";
import PlayedDayControllerExpressPort from "../../../domain/ports/driver/controller/PlayedDayControllerExpressPort";
import CreatePlayedDayUseCasePort from "../../../domain/ports/driver/usecase/PlayedDays/CreatePlayedDayUseCasePort";
import CreatePlayedDayInterface from "../../../domain/types/endpoint/CreatePlayedDay";
import { GetLast31DaysUseCasePort } from "../../../domain/ports/driver/usecase/PlayedDays/GetLast31DaysUseCasePort";

export default class PlayedDayControllerExpress implements PlayedDayControllerExpressPort{
        
    constructor(private createPlayedDayUseCase: CreatePlayedDayUseCasePort, private getLast31DaysUseCase : GetLast31DaysUseCasePort){}
    
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
            
            res.status(201).json({ message: 'Played day created', data: playedDayCreated });
            

        } catch (error: any) {
            
            console.error('Error creating played day:', error);
            res.status(500).json({ message: 'Internal server error' });

        }

    }

    public async getLast31Days(req: Request, res: Response): Promise<void> {
        try {
            const id_user = req.body.id_user;
            if (!id_user) {
                res.status(400).json({ message: 'Bad request: missing fields' });
                return;
            }
            
            const last31Days = await this.getLast31DaysUseCase.getLast31Days(Number(id_user));
            
            res.status(200).json({ message: 'Success', data: last31Days });
            
        } catch (error: any) {
            console.error('Error getting last 31 days:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
        
      }
}