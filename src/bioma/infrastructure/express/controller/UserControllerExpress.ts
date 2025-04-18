import { Request, Response } from "express";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UpdateUserExperienceUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdateUserExperienceUseCasePort";
import CreateUserInterface from "../../../domain/types/endpoint/CreateUser";
import { CreateUserUseCasePort } from "../../../domain/ports/driver/usecase/Users/CreateUserUseCasePort";
import GetUserStreakUseCasePort from "../../../domain/ports/driver/usecase/Users/GetUserStreakUseCasePort";
import GetUserStreakInterface from "../../../domain/types/endpoint/GetUserStreakInterface";
import LoginUseCasePort from "../../../domain/ports/driver/usecase/Users/loginUseCasePort";
import DeleteUserCascadaUseCasePort from "../../../domain/ports/driver/usecase/Users/DeleteUserCascadaUseCasePort";
import GetTotalBalanceUseCasePort from "../../../domain/ports/driver/usecase/Users/GetTotalBalanceUseCasePort";


export default class UserControllerExpress implements UserControllerExpressPort {

    constructor(
        private readonly updateUserXpeUseCase: UpdateUserExperienceUseCasePort,
        private readonly createUserUseCase: CreateUserUseCasePort,
        private readonly getUserStrakeUseCase: GetUserStreakUseCasePort,
        private readonly loginUserUseCase: LoginUseCasePort,
        private readonly deleteUserCascadaUseCase: DeleteUserCascadaUseCasePort,
        private readonly getTotalBalanceUseCase: GetTotalBalanceUseCasePort,
        
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

    async loginUser(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                res.status(400).json({ message: 'Bad request body' });
                return;
            }

            const response = await this.loginUserUseCase.login(username, password);
            if (!response) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }
            res.status(200).json({ success:true, data: response });
            
        } catch (error) {
            console.error("Error logging in user:", error);
            res.status(500).send({ message: "Internal server error", error: error });
        }
    }

    async deleteUserById(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;

            console.log("body", body);
            
            
            if (!body) {
            res.status(400).json({ message: 'Bad request body' });
            return;
            }
            
        
            let deleteUserInterface = null;
            try {
            deleteUserInterface = body as { id_user: number };
            } catch (error) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
            }
        
            if (!deleteUserInterface) {
            res.status(400).json({ message: 'Invalid or missing id_user' });
            return;
            }
        
            const id = deleteUserInterface.id_user;
      
        
          const result = await this.deleteUserCascadaUseCase.deleteUserById(id);
          
          if (result === -1) {
            res.status(404).json({ message: `User with ID ${id} not found or not deleted.` });
            return;
          }
      
          res.status(200).json({ message: 'User deleted successfully', data: result });
        } catch (error) {
          console.error('Error deleting user:', error);
          res.status(500).json({ message: 'Internal server error', error });
        }
    }
    async getTotalBalance(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;   
            console.log("body", body);
            
        
            let userIdInterface = null;
            if(!body) {
                res.status(400).json({ message: 'Bad request body' });
            }
            try{
                userIdInterface = body as { id_user: number };
            }catch(error){
                res.status(400).json({ message: 'Bad request interface' });
            }

            if (!userIdInterface) {
                res.status(400).json({ message: 'Bad request interface' });
                return;
            }

            const user_id = userIdInterface.id_user;        
                    
            const response = await this.getTotalBalanceUseCase.getTotalBalance(user_id);

            res.status(200).send({ message: "User total balance fetched successfully", data: response });

        } catch (error) {

            res.status(500).send({ message: "Internal server error en el dbc de user" , error: error});
        }
 
    }

   
    
}