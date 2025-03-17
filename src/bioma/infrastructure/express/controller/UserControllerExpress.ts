import { Request, Response } from "express";
import UserControllerExpressPort from "../../../domain/ports/driver/controller/UserControllerExpressPort";
import UpdateUserExperienceUseCasePort from "../../../domain/ports/driver/usecase/UpdateUserExperienceUseCasePort";

export default class UserControllerExpress implements UserControllerExpressPort {
   

    constructor(private readonly updateUserXpeUseCase: UpdateUserExperienceUseCasePort) {}

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

}