import NullAgente from '../../../../domain/model/producer/NullAgente'
import Agente from '../../../../domain/model/producer/Agente'
import CitaDataInterface from '../../../../domain/dctos/CitaDataInterface'

export default class ProducerProvider {
  public static get = (movie: CitaDataInterface): Agente[] => {
    return movie.producers.map((producer) => {
      const producerNames = producer.split(' ')
      const name = producerNames[0] ?? ''
      const lastname = producerNames[1] ?? ''
      if (
        producerNames === undefined ||
        producerNames.length === 0 ||
        name === ''
      ) {
        return new NullAgente()
      }
      return new Agente({
        name: name,
        lastname: lastname,
      })
    })
  }
}
