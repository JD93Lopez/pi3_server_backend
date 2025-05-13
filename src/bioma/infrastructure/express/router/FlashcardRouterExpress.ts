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
    this.router.post(
      '/flashcard/topic/organized',
      this.flashcardController.getOrganizedFlashcardsByTopic.bind(this.flashcardController)
    ),
    this.router.post(
      '/flashcard/topic/creation',
      this.flashcardController.createFlashcards.bind(this.flashcardController)
    ),
    this.router.put(
      '/flashcard/update',
      this.flashcardController.updateFlashcards.bind(this.flashcardController)
    ),
    this.router.post(
      '/flashcard/ai/creation',
      this.flashcardController.createFlashcardsFromAi.bind(this.flashcardController)
    ),
    this.router.post(
      '/flashcard/biome/organized', 
      this.flashcardController.getOrganizedFlashcardsByBiome.bind(this.flashcardController)
    )
  }
}