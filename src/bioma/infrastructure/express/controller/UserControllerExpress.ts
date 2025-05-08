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
import GetSelectedItemUseCasePort from "../../../domain/ports/driver/usecase/Users/GetSelectedItemUseCasePort";
import SendVerificationCodeUserCasePort from "../../../domain/ports/driver/usecase/Users/SendVerificationCodeUserCasePort";
import VerifyCodeUseCasePort from "../../../domain/ports/driver/usecase/Users/VerifyCodeUseCasePort";
import UpdatePetNameUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdatePetNameUseCasePort";
import UpdatePetNameInterface from "../../../domain/types/endpoint/Users/UpdatePetNameInterface";


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
        private readonly getSelectedItemUseCase: GetSelectedItemUseCasePort,
        private readonly sendVerificationCodeUseCase: SendVerificationCodeUserCasePort,
        private readonly verifyCodeUseCase: VerifyCodeUseCasePort,
        private readonly updatePetNameUseCase: UpdatePetNameUseCasePort
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

    async getSelectedItem(req: Request, res: Response): Promise<void> {
        try {
            // Verificar que 'req.params.id' esté definido
            const userIdParam = req.params["id"] ?? "0";
    
            if (!userIdParam) {
                res.status(400).json({ message: 'user_id is required.' });
            }
    
            // Convertir a número
            const user_id = parseInt(userIdParam, 10);
    
            // Validar si el 'user_id' es un número válido
            if (isNaN(user_id) || user_id <= 0) {
                res.status(400).json({ message: 'Invalid user_id. It must be a positive number.' });
            }
    
            // Llamar al caso de uso para obtener el ítem seleccionado
            const response = await this.getSelectedItemUseCase.getSelectedItem(user_id);
    
            // Enviar la respuesta exitosa
            res.status(200).json({ message: "User's selected item fetched successfully", data: response });
    
        } catch (error: any) {
            console.error("Error fetching selected item:", error);
            res.status(500).json({ message: "Internal server error en el dbc de user", error: error.message || error });
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

    async updatePetName(req: Request, res: Response): Promise<void> {
        try {
            // Verificar que 'req.body' esté definido y castearlo a la interfaz UpdatePetNameInterface
            const body: UpdatePetNameInterface = req.body;
    
            // Validar que el body cumpla con la estructura de la interfaz
            if (!body || typeof body.id_user !== 'number' || typeof body.pet_name !== 'string') {
                res.status(400).json({ message: 'Bad request body, expected structure: { user_id: number, pet_name: string }' });
                return;
            }
    
            // Extraer las propiedades del body
            const { id_user: user_id, pet_name } = body;
    
            // Debugging line
            console.log("Request body for updatePetName:", req.body);
    
            // Validación adicional: Asegurarse de que los campos no sean vacíos
            if (!user_id || !pet_name) {
                res.status(400).json({ message: 'Bad request body, missing required fields' });
                return;
            }
    
            // Llamar al caso de uso para actualizar el nombre de la mascota
            const response = await this.updatePetNameUseCase.updatePetName(user_id, pet_name);
    
            // Respuesta exitosa
            res.status(200).json({ success: true, message: 'Pet name updated successfully', data: response });
        } catch (error: any) {
            console.error('Error updating pet name:', error);
            // En caso de error, devolver un error 500
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
        

}