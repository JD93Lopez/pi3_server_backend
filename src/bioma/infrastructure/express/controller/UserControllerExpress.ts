import { Request, Response } from "express";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UpdateUserExperienceUseCasePort from "../../../domain/ports/driver/usecase/UpdateUserExperienceUseCasePort";
import CreateUserInterface from "../../../domain/types/endpoint/CreateUser";
import { CreateUserUseCasePort } from "../../../domain/ports/driver/usecase/CreateUserUseCasePort";
import GetUserStreakUseCasePort from "../../../domain/ports/driver/usecase/GetUserStreakUseCasePort";
import GetUserStreakInterface from "../../../domain/types/endpoint/GetUserStreakInterface";

export default class UserControllerExpress implements UserControllerExpressPort {

    constructor(
        private readonly updateUserXpeUseCase: UpdateUserExperienceUseCasePort,
        private readonly createUserUseCase: CreateUserUseCasePort,
        private readonly getUserStrakeUseCase: GetUserStreakUseCasePort
    ) {}

    async updateUserExperience(req: Request, res: Response): Promise<void> {

        try {
            const {user_id, user_xp }= req.body;
            
            if(!user_id || !user_xp) {
                res.status(400).json({ message: 'Bad request body' });
            }

            const response = await this.updateUserXpeUseCase.updateUserXP(user_id, user_xp);
            res.status(200).send({ message: "User experience updated successfully", data: response });

        } catch (error) {
            res.status(500).send({ message: "Internal server error" , error: error});
        }
    }
    async createUser(req: Request, res: Response): Promise<void> {
        let createUserInterface: CreateUserInterface | null = null;

        const body = req.body;

        if (!body) {
            res.status(400).json({ message: 'Bad request body' });
            return;
        }

        try {
            createUserInterface = body as CreateUserInterface;
        } catch (error) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        if (!createUserInterface) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        const user = createUserInterface.user;
        if (!user) {
            res.status(400).json({ message: 'Bad request user' });
            return;
        }

        try {
            const createdUserId = await this.createUserUseCase.createUser(user);
            res.status(200).json({ message: 'Success', data: createdUserId });
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getUserStreak(req: Request, res: Response): Promise<void> {

        try {
            const body = req.body;
            
            let userStreakInterface = null;
            if(!body) {
                res.status(400).json({ message: 'Bad request body' });
            }
            try{
                userStreakInterface = body as GetUserStreakInterface;
            }catch(error){
                res.status(400).json({ message: 'Bad request interface' });
            }

            if (!userStreakInterface) {
                res.status(400).json({ message: 'Bad request interface' });
                return;
            }

            const user_id = userStreakInterface.user_id;                
            const response = await this.getUserStrakeUseCase.getUserStreak(user_id);

            res.status(200).send({ message: "User streak fetched successfully", data: response });

        } catch (error) {

            res.status(500).send({ message: "Internal server error en el dbc de user" , error: error});
        }
    }

}