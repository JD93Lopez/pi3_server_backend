import { FlashcardCreateService } from '../../../application/service/Flashcards/FlashcardCreateService'
import { FlashcardCreateServicePort } from '../../../domain/ports/driver/service/FlashcardCreateServicePort'
import FlashcardRepositoryFactory from '../repository/FlashcardRepositoryFactory'

//Aqui se le asigna a un servicio concreto, un repositorio concreto
//Se crea una instancia de FlashcardCreateService con el repositorio de FlashcardRepositoryFactory
//Se retorna la instancia creada


export default class FlashcardCreateServiceFactory {
  public static readonly create = (): FlashcardCreateServicePort  => {
    const repository = FlashcardRepositoryFactory.create()
    return new FlashcardCreateService(repository)
  }
}


//TODO- >> CHECK THIS 