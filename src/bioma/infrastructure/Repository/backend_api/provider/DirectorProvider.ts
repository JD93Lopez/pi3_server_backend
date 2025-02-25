import Cliente from "../../../../domain/model/cliente/Cliente"
import NullCliente from "../../../../domain/model/cliente/NullCliente"
import CitaDataInterface from "../../../../domain/docs/CitaDataInterface"

export default class DirectorProvider {
  public static readonly get = (movie: CitaDataInterface): Cliente => {
    const directorNames = movie.director.split(' ')
    const name  = directorNames[0] ?? ''
    const lastname = directorNames[1] ?? ''
    if (directorNames === undefined || directorNames.length === 0 || name === '') {
      return new NullCliente()
    }
    return new Cliente({
      name: name,
      lastname: lastname,
      yearsOfExperience: 12,          
    }) 
  }
}