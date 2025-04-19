import { Request, Response } from "express";
import ItemControllerExpressPort from "../../../domain/ports/driver/controller/ItemControllerExpressPort";
import BuyItemUseCasePort from "../../../domain/ports/driver/usecase/Items/BuyItemUseCasePort";

export default class ItemControllerExpress implements ItemControllerExpressPort{

    constructor(
        private readonly buyItemUseCase: BuyItemUseCasePort,
    ) {}


    async buyItem(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;   
            console.log("body", body);
            
        
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

}