import { OrganizerService } from '../../../../application/service/Flashcards/OrganizerService'
import { OrganizerServicePort } from '../../../../domain/ports/driver/service/Flashcards/OrganizerServicePort'

export default class OrganizeServiceFactory {
  public static readonly create = (): OrganizerServicePort  => {
    return new OrganizerService()
  }
}
