import { Request, Response } from "express";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UpdateUserExperienceUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdateUserExperienceUseCasePort";
import CreateUserInterface from "../../../domain/types/endpoint/Users/CreateUser";
import { CreateUserUseCasePort } from "../../../domain/ports/driver/usecase/Users/CreateUserUseCasePort";
import GetUserStreakUseCasePort from "../../../domain/ports/driver/usecase/Users/GetUserStreakUseCasePort";
import GetUserStreakInterface from "../../../domain/types/endpoint/Users/GetUserStreakInterface";
import LoginUseCasePort from "../../../domain/ports/driver/usecase/Users/loginUseCasePort";
import DeleteUserCascadaUseCasePort from "../../../domain/ports/driver/usecase/Users/DeleteUserCascadaUseCasePort";
import GetTotalBalanceUseCasePort from "../../../domain/ports/driver/usecase/Users/GetTotalBalanceUseCasePort";
import GetDaysSinceLastXPActivityUseCasePort from "../../../domain/ports/driver/usecase/Users/GetDaysSinceLastXPActivityUseCasePort";
import DaysSinceXpActivityInterface from "../../../domain/types/endpoint/Users/DaysSinceXpActivityInterface";
import SaveSelectedItemUseCasePort from "../../../domain/ports/driver/usecase/Users/SaveSelectedItemUseCasePort";
import SendVerificationCodeUserCasePort from "../../../domain/ports/driver/usecase/Users/SendVerificationCodeUserCasePort";
import VerifyCodeUseCasePort from "../../../domain/ports/driver/usecase/Users/VerifyCodeUseCasePort";


export default class UserControllerExpress implements UserControllerExpressPort {

    constructor(
        private readonly updateUserXpeUseCase: UpdateUserExperienceUseCasePort,
        private readonly createUserUseCase: CreateUserUseCasePort,
        private readonly getUserStrakeUseCase: GetUserStreakUseCasePort,
        private readonly loginUserUseCase: LoginUseCasePort,
        private readonly deleteUserCascadaUseCase: DeleteUserCascadaUseCasePort,
        private readonly getTotalBalanceUseCase: GetTotalBalanceUseCasePort,
        private readonly getDaysSinceLastXPActivityUseCase: GetDaysSinceLastXPActivityUseCasePort,
        private readonly saveSelectedItemUseCase: SaveSelectedItemUseCasePort,
        private readonly sendVerificationCodeUseCase: SendVerificationCodeUserCasePort,
        private readonly verifyCodeUseCase: VerifyCodeUseCasePort
        
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

            const idParam = req.params['id'];
            if (!idParam) {
                res.status(400).json({ message: 'Missing id parameter' });
                return;
            }
            const id = parseInt(idParam, 10);

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

    async getDaysSinceLastXPActivity(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;  
            let daysSinceXpActivityInterface = null;

            if(!body) {
                res.status(400).json({ message: 'Bad request body' });
            }
            try{
                daysSinceXpActivityInterface = body as DaysSinceXpActivityInterface;
            }catch(error){
                res.status(400).json({ message: 'Bad request interface' });
            }

            if (!daysSinceXpActivityInterface) {
                res.status(400).json({ message: 'Bad request interface' });
                return;
            }

            const id = daysSinceXpActivityInterface.id_user;
            const response = await this.getDaysSinceLastXPActivityUseCase.getDaysSinceLastXPActivity(id);

            console.log("Response from getDaysSinceLastXPActivityUseCase:", response); // Debugging line
            res.status(200).send({ message: "Days of inactivity fetched successfully", data: response });

        } catch (error) {
            console.error("Error fetchingof inactivity:", error);
            res.status(500).send({ message: "Internal server error en el dbc de user" , error: error});
        }
        
    }

    async saveSelectedItem(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;   
            
        
            let saveSelectedItemInterface = null;
            if(!body) {
                res.status(400).json({ message: 'Bad request body' });
            }
            try{
                saveSelectedItemInterface = body as { id_user: number, id_item: number };
            }catch(error){
                res.status(400).json({ message: 'Bad request interface' });
            }

            if (!saveSelectedItemInterface) {
                res.status(400).json({ message: 'Bad request interface' });
                return;
            }

            const user_id = saveSelectedItemInterface.id_user;
            const id_item = saveSelectedItemInterface.id_item;
            
            if (typeof user_id !== 'number' || user_id <= 0) {
                res.status(400).json({ message: 'Invalid user_id. It must be a positive number.' });
            }

            if (typeof id_item !== 'number' || id_item <= 0) {
                res.status(400).json({ message: 'Invalid id_item. It must be a positive number.' });
            }
                    
            const response = await this.saveSelectedItemUseCase.saveSelectedItem(user_id, id_item);

            res.status(200).send({ message: "User selected item saved successfully", data: response });

        } catch (error) {
            console.log("Error saving selected item:", error);
            

            res.status(500).send({ message: "Internal server error en el dbc de user" , error: error});
        }
        
 
    }
    

    async sendVerificationCode(req: Request, res: Response): Promise<void> {
        try {
            const { email } = req.body;
            
            console.log("Email from request body:", email); // Debugging line
            if (!email) {
                res.status(400).json({ message: 'Bad request body' });
                return;
            }

            const response = await this.sendVerificationCodeUseCase.execute(email);
            if (!response) {
                res.status(500).json({success:false, message: 'Error sending verification code' });
                return;
            }

            res.status(200).json({ success:true, message: 'Verification code sent successfully' });
            
        } catch (error) {
            console.error("Error sending verification code:", error);
            res.status(500).send({ message: "Internal server error", error: error });
        }
    }

    async verifyCode(req: Request, res: Response): Promise<void> {
        try {
            const { email, code } = req.body;

            if (!email || !code) {
                res.status(400).json({ message: 'Bad request body' });
                return;
            }

            const response = await this.verifyCodeUseCase.verifyCode(email, code);
            
            if (!response) {
                res.status(401).json({success:false, message: 'Unauthorized' });
                return;
            }
            res.status(200).json({ success:true, message: 'Verification code verified successfully' });
            
        } catch (error) {
            console.error("Error verifying code:", error);
            res.status(500).send({ message: "Internal server error", error: error });
        }
    }


}