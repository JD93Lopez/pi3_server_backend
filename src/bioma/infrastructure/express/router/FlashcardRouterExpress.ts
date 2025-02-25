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
    this.createFlashcardRoutes()
  }

  public getFlashcardRoutes = (): void => {
    this.router.post(
      '/v1.0/flashcard/topic/organized',
      this.flashcardController.getOrganizedFlashcardsByTopic.bind(this.flashcardController)
    ),
    this.router.post(
      '/v1.0/flashcard/topic/creation',
      this.flashcardController.getOrganizedFlashcardsByTopic.bind(this.flashcardController)
    )
  }

  public createFlashcardRoutes = (): void => {
    this.router.post(
      '/v1.0/flashcards/create',
      this.flashcardController.createFlashcards.bind(this.flashcardController)
    )
  }
}