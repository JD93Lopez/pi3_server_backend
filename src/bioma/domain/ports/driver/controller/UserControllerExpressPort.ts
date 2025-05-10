import { Request, Response } from "express";

export default interface UserControllerExpressPort {
    createUser(req: Request, res: Response): Promise<void>;
    updateUserExperience(req: Request, res: Response): Promise<void>
    getUserStreak(req: Request, res: Response): Promise<void>
    loginUser(req: Request, res: Response): Promise<void>;
    deleteUserById(req: Request, res: Response): Promise<void>;
    getTotalBalance(req: Request, res: Response): Promise<void>;
    getDaysSinceLastXPActivity(req: Request, res: Response): Promise<void>;
    saveSelectedItem(req: Request, res: Response): Promise<void>;
    getSelectedItem(req: Request, res: Response): Promise<void>;
    sendVerificationCode(req: Request, res: Response): Promise<void>;
    verifyCode(req: Request, res: Response): Promise<void>;
    updateUserProfile(req: Request, res: Response): Promise<void>;
    isTokenValid(req: Request, res: Response): Promise<void>;
    updatePetName(req: Request, res: Response): Promise<void>;
}
    


