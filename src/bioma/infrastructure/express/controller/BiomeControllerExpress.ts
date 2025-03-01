import BiomeControllerExpressPort from "../../../domain/ports/driver/controller/BiomeControllerExpressPort";
import { Request, Response } from 'express';
import { CreateBiomeUseCasePort } from "../../../domain/ports/driver/usecase/CreateBiomeUseCasePort";
import CreateBiomeInterface from "../../../domain/types/endpoint/CreateBiome";

export default class BiomeControllerExpress implements BiomeControllerExpressPort {

    constructor( private readonly createBiomeUseCase: CreateBiomeUseCasePort){}

    async createBiome(req: Request, res: Response): Promise<void> {
        
        let createBiomeInterface = null;

        const body = req.body

        if(!body) {
            res.status(400).json({ message: 'Bad request body' })  
        }

        try {
            createBiomeInterface = body as CreateBiomeInterface
        }
        catch (error) {
            res.status(400).json({ message: 'Bad request interface' })
        }
        
        if(!createBiomeInterface) {
            res.status(400).json({ message: 'Bad request interface' })
            return
        }

        const biome = createBiomeInterface.biome
        if(!biome) {
            res.status(400).json({ message: 'Bad request biome' })
        }

        const id_user = createBiomeInterface.id_user
        if(!id_user) {
            res.status(400).json({ message: 'Bad request id_user' })
        }

        const idSavedBiome = await this.createBiomeUseCase.createBiome(id_user, biome)

        res.status(200).json({ message: 'Success', data: idSavedBiome })
         
    }
}