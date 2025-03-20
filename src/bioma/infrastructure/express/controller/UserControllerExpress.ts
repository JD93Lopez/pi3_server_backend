import { Request, Response } from 'express';
import { CreateUserUseCasePort } from '../../../domain/ports/driver/usecase/CreateUserUseCasePort';
import UserControllerExpressPort from '../../../domain/ports/driver/controller/UserControllerExpressPort';
import CreateUserInterface from '../../../domain/types/endpoint/CreateUser';

export default class UserControllerExpress implements UserControllerExpressPort {
    
    constructor(
        private readonly createUserUseCase: CreateUserUseCasePort
    ) {}

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
}