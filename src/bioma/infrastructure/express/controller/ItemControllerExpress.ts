import { Request, Response } from "express";
import ItemControllerExpressPort from "../../../domain/ports/driver/controller/ItemControllerExpressPort";
import BuyItemUseCasePort from "../../../domain/ports/driver/usecase/Items/BuyItemUseCasePort";
import GetStoreItemsUseCasePort from "../../../domain/ports/driver/usecase/Items/GetStoreItemsUseCasePort";

export default class ItemControllerExpress implements ItemControllerExpressPort{

    constructor(
        private readonly buyItemUseCase: BuyItemUseCasePort,
        private readonly getStoreItemsUseCase: GetStoreItemsUseCasePort,
    ) {}


    async buyItem(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;   
            
        
            let buyItemInterface = null;
            if(!body) {
                res.status(400).json({ message: 'Bad request body' });
            }
            try{
                buyItemInterface = body as { user_id: number, item_id: number };
            }catch(error){
                res.status(400).json({ message: 'Bad request interface' });
            }

            if (!buyItemInterface) {
                res.status(400).json({ message: 'Bad request interface' });
                return;
            }

            const user_id = buyItemInterface.user_id;        
            const item_id = buyItemInterface.item_id;        
                    
            const response = await this.buyItemUseCase.buyItem(user_id, item_id);

            res.status(200).send({ message: "User fetched successfully", data: response });

        } catch (error) {

            res.status(500).send({ message: "Internal server error en el dbc de user" , error: error});
        }
 
        
    }   
    
    async getStoreItems(req: Request, res: Response): Promise<void> {
        try {
            const user_id_param = req.params["user_id"];
    
            if (!user_id_param) {
                res.status(400).json({ message: "Falta el parámetro user_id en la URL" });
                return;
            }
    
            const user_id = parseInt(user_id_param);
    
            if (isNaN(user_id)) {
                res.status(400).json({ message: "El parámetro user_id debe ser un número válido" });
                return;
            }
    
            const response = await this.getStoreItemsUseCase.getStoreItems(user_id);
            res.status(200).json({ message: "User fetched successfully", data: response });
    
        } catch (error) {
            res.status(500).json({ message: "Internal server error en el dbc de user", error });
        }
    }

}