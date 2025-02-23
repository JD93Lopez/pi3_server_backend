import RouterExpress from "../../../../express/domain/RouterExpress"
import { FlashcardControllerExpressPort } from "../../../domain/ports/driver/controller/FlashcardControllerExpressPort"
import { FlashcardRouterExpressPort } from "../../../domain/ports/driver/router/FlashcardRouterExpressPort"

export default class FlashcardRouterExpress extends RouterExpress implements FlashcardRouterExpressPort {
  constructor(
    private readonly flashcardController: FlashcardControllerExpressPort
  ) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.getFlashcardRoutes()
  }

  public getFlashcardRoutes = (): void => {
    this.router.get(
      '/v1.0/flashcard/get/organized',
      this.flashcardController.getOrganizedFlashcards.bind(this.flashcardController)
    )
  }
}