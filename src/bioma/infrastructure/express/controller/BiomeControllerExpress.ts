import BiomeControllerExpressPort from "../../../domain/ports/driver/controller/BiomeControllerExpressPort";
import { Request, Response } from 'express';
import { CreateBiomeUseCasePort } from "../../../domain/ports/driver/usecase/CreateBiomeUseCasePort";
import CreateBiomeInterface from "../../../domain/types/endpoint/CreateBiome";
import UpdateBiomeUseCasePort from "../../../domain/ports/driver/usecase/UpdateBiomeUseCasePort";
import UpdateBiomeInterface from "../../../domain/types/endpoint/UpdateBiome";
import DeleteBiomeUseCasePort from "../../../domain/ports/driver/usecase/DeleteBiomeUseCasePort";
import DeleteBiomeInterface from "../../../domain/types/endpoint/DeleteBiome";
import GetBiomesByUserUseCasePort from "../../../domain/ports/driver/usecase/GetBiomesByUserUseCasePort";
import GetBiomesByUserInterface from "../../../domain/types/endpoint/GetBiomesByUserInterface";
export default class BiomeControllerExpress implements BiomeControllerExpressPort {

    constructor(
        private readonly createBiomeUseCase: CreateBiomeUseCasePort,
        private readonly updateBiomeUseCase: UpdateBiomeUseCasePort,
        private readonly deleteBiomeUseCase: DeleteBiomeUseCasePort,
         private readonly getBiomesByUserUseCase: GetBiomesByUserUseCasePort
    ) {}
    async createBiome(req: Request, res: Response): Promise<void> {
        let createBiomeInterface = null;

        const body = req.body;

        if (!body) {
            res.status(400).json({ message: 'Bad request body' });
            return;
        }

        try {
            createBiomeInterface = body as CreateBiomeInterface;
        } catch (error) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        if (!createBiomeInterface) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        const biome = createBiomeInterface.biome;
        if (!biome) {
            res.status(400).json({ message: 'Bad request biome' });
            return;
        }

        const id_user = createBiomeInterface.id_user;
        if (!id_user) {
            res.status(400).json({ message: 'Bad request id_user' });
            return;
        }

        try {
            const idSavedBiome = await this.createBiomeUseCase.createBiome(id_user, biome);
            res.status(200).json({ message: 'Success', data: idSavedBiome });
        } catch (error) {
            console.error("Error creating biome:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async updateBiome(req: Request, res: Response): Promise<void> {
        let updateBiomeInterface = null;

        const body = req.body;

        if (!body) {
            res.status(400).json({ message: 'Bad request body' });
            return;
        }

        try {
            updateBiomeInterface = body as UpdateBiomeInterface;
        } catch (error) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        if (!updateBiomeInterface) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        const biome = updateBiomeInterface.biome;
        if (!biome) {
            res.status(400).json({ message: 'Bad request biome' });
            return;
        }

        const id_user = updateBiomeInterface.id_user;
        if (!id_user) {
            res.status(400).json({ message: 'Bad request id_user' });
            return;
        }

        try {
            const updatedBiomeId = await this.updateBiomeUseCase.updateBiome(id_user, biome);
            res.status(200).json({ message: 'Success', data: updatedBiomeId });
        } catch (error) {
            console.error("Error updating biome:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async deleteBiome(req: Request, res: Response): Promise<void> {
        let deleteBiomeInterface = null    
        const body = req.body;


        if (!body) {
            res.status(400).json({ message: 'Bad request body' });
            return;
        }
        try {
            deleteBiomeInterface = body as DeleteBiomeInterface;
        } catch (error) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }
        if (!deleteBiomeInterface) {
            res.status(400).json({ message: 'Bad request interface' });
            return;
        }

        const biome = deleteBiomeInterface.biome;
        if (!biome) {
            res.status(400).json({ message: 'Bad request biome' });
            return;
        }

        const id_user = deleteBiomeInterface.id_user;
        if (!id_user) {
            res.status(400).json({ message: 'Bad request id_user' });
            return;
        }
        try {
            const idSavedBiome = await this.deleteBiomeUseCase.deleteBiome(id_user, biome);
            res.status(200).json({ message: 'Success', data: idSavedBiome });
        } catch (error) {
            console.error("Error creating biome:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Success', data: idSavedBiome })
         
    };

    async getBiomesByUser(req: Request, res: Response): Promise<void> {
        
        let getBiomesByUserInterface = null;

        const body = req.body

        if(!body) {
            res.status(400).json({ message: 'Bad request body' })  
        }

        
        try {
            getBiomesByUserInterface = body as GetBiomesByUserInterface
        }
        catch (error) {
            res.status(400).json({ message: 'Bad request interface' })
        }

        if(!getBiomesByUserInterface) {
            res.status(400).json({ message: 'Bad request interface' })
            return
        }

        const id_user = getBiomesByUserInterface.id_user

        if(!id_user) {
            res.status(400).json({ message: 'Bad request id_user' })
        }

        const biomes = await this.getBiomesByUserUseCase.getBiomesByUser(id_user)

        res.status(200).json({ message: 'Success', data: biomes })
    }
}