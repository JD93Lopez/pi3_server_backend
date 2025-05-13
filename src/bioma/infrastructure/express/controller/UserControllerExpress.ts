import { Request, Response } from "express";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UpdateUserExperienceUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdateUserExperienceUseCasePort";
import GetUserStreakUseCasePort from "../../../domain/ports/driver/usecase/Users/GetUserStreakUseCasePort";
import GetUserStreakInterface from "../../../domain/types/endpoint/Users/GetUserStreakInterface";
import DeleteUserCascadaUseCasePort from "../../../domain/ports/driver/usecase/Users/DeleteUserCascadaUseCasePort";
import GetTotalBalanceUseCasePort from "../../../domain/ports/driver/usecase/Users/GetTotalBalanceUseCasePort";
import GetDaysSinceLastXPActivityUseCasePort from "../../../domain/ports/driver/usecase/Users/GetDaysSinceLastXPActivityUseCasePort";
import DaysSinceXpActivityInterface from "../../../domain/types/endpoint/Users/DaysSinceXpActivityInterface";
import SaveSelectedItemUseCasePort from "../../../domain/ports/driver/usecase/Users/SaveSelectedItemUseCasePort";
import GetSelectedItemUseCasePort from "../../../domain/ports/driver/usecase/Users/GetSelectedItemUseCasePort";
import UpdateUserProfileUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdateUserProfileUseCasePort";
import UpdateUserPerfilInterface from "../../../domain/types/endpoint/Users/UpdatePerfilInterface";
import UpdatePetNameUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdatePetNameUseCasePort";
import UpdatePetNameInterface from "../../../domain/types/endpoint/Users/UpdatePetNameInterface";


export default class UserControllerExpress implements UserControllerExpressPort {

    constructor(
        private readonly updateUserXpeUseCase: UpdateUserExperienceUseCasePort,
        private readonly getUserStrakeUseCase: GetUserStreakUseCasePort,
        private readonly deleteUserCascadaUseCase: DeleteUserCascadaUseCasePort,
        private readonly getTotalBalanceUseCase: GetTotalBalanceUseCasePort,
        private readonly getDaysSinceLastXPActivityUseCase: GetDaysSinceLastXPActivityUseCasePort,
        private readonly saveSelectedItemUseCase: SaveSelectedItemUseCasePort,
        private readonly getSelectedItemUseCase: GetSelectedItemUseCasePort,
        private readonly updateUserProfileUseCase: UpdateUserProfileUseCasePort,
        private readonly updatePetNameUseCase: UpdatePetNameUseCasePort,
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

  
    async deleteUserById(req: Request, res: Response): Promise<void> {
        try {

            console.log("SI LLEGA AL DELETE?? Request params:", req.params);
            
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

            res.status(200).send({ message: "Days of inactivity fetched successfully", data: response });

        } catch (error) {
            console.error("Error fetchingof inactivity:", error);
            res.status(500).send({ message: "Internal server error en el dbc de user" , error: error});
        }
        
    }

    async saveSelectedItem(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;
    
            if (!body) {
                res.status(400).json({ message: 'Bad request: missing body' });
                return;
            }

            // Validar estructura mínima
            const { user_id, item_id }: {user_id:number, item_id:number} = body;

            if (!user_id || user_id <= 0) {
                res.status(400).json({ message: 'Invalid user_id. It must be a positive number.' });
                return; 
            }
    
            if (!item_id || item_id <= 0) {
                res.status(400).json({ message: 'Invalid id_item. It must be a positive number.' });
                return;
            }
    
            // Llamar al use case
            const response = await this.saveSelectedItemUseCase.saveSelectedItem(user_id, item_id);
    
            res.status(200).json({
                message: "User selected item saved successfully",
                data: response
            });
            return; 
    
        } catch (error) {
            console.error("Error saving selected item:", error);
            res.status(500).json({
                message: "Internal server error",
                error: error instanceof Error ? error.message : String(error)
            });
            return;
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
    

    async updateUserProfile(req: Request, res: Response): Promise<void> {
        
        try {
            let updateUserInterface: UpdateUserPerfilInterface | null = null;
            const body = req.body;
            
        if (!body) {
            res.status(400).json({ message: 'Bad request body' });
            return;
        }

        try {
            updateUserInterface = body as UpdateUserPerfilInterface;
        } catch (error) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        if (!updateUserInterface) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        const user = updateUserInterface.user;
        if (!user) {
            res.status(400).json({ message: 'Bad request user' });
            return;
        }

        const updatedUser = await this.updateUserProfileUseCase.updateUserProfile(user);

        if(!updatedUser) {
            res.status(404).json({ message:'User not updated'});
            return;
        }

        res.status(200).json({ message: 'Success', data: updatedUser });
        
        } catch (error) {
            console.error("Error updating user:", error);
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