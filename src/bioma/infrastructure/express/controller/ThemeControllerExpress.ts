import { Request, Response } from "express";
import { GetThemesUseCasePort } from "../../../domain/ports/driver/usecase/GetThemesUseCasePort";
import { ThemeControllerExpressPort } from "../../../domain/ports/driver/controller/ThemeControllerExpress";

export default class ThemeControllerExpress implements ThemeControllerExpressPort {
  constructor(private readonly getThemesUseCase: GetThemesUseCasePort) {}
  public async getAllThemes(req: Request, res: Response): Promise<void> {
    const body = req.body;
    if(!body) {
        res.status(400).json({ message: 'Bad request body' })  
      }
    try {
      const themes = await this.getThemesUseCase.getAllThemes();

      res.status(200).json({ message: "Success", data: themes });
    } catch (error) {
      console.error("Error getting themes:", error);
      res.status(500).json({ message: "Internal server error"});
    }
  }
}