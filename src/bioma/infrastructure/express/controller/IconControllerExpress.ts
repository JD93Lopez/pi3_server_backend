import { Request, Response } from "express";
import { GetIconsUseCasePort } from "../../../domain/ports/driver/usecase/GetIconsUseCasePort";
import { IconControllerExpressPort } from "../../../domain/ports/driver/controller/IconControllerExpress";

export default class IconControllerExpress implements IconControllerExpressPort {
  constructor(private readonly getIconsUseCase: GetIconsUseCasePort) {}
  public async getAllIcons(req: Request, res: Response): Promise<void> {
    const body = req.body;
    if(!body) {
        res.status(400).json({ message: 'Bad request body' })  
      }
    try {
      const icons = await this.getIconsUseCase.getAllIcons();

      res.status(200).json({ message: "Success", data: icons });
    } catch (error) {
      console.error("Error getting icons:", error);
      res.status(500).json({ message: "Internal server error"});
    }
  }
}