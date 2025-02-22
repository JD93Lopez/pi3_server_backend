import { Request, Response } from "express"
import { GetOrganizedFlashcardsUseCasePort } from "../../../domain/ports/driver/usecase/GetOrganizedFlashcardsUseCasePort"
import { FlashcardControllerExpressPort } from "../../../domain/ports/driver/controller/FlashcardControllerExpressPort"

export default class FlashcardControllerExpress implements FlashcardControllerExpressPort
{
  constructor(
    private readonly organizeUseCase: GetOrganizedFlashcardsUseCasePort,
  ) {}

  public async getOrganizedFlashcards(_req: Request, res: Response): Promise<void> {
    const flashcards = await this.organizeUseCase.getOrganizedFlashcards()

    res.status(200).json({ message: 'Success', data: flashcards })
  }
}
