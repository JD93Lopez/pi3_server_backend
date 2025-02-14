import CitaDataInterface from "../../../../domain/types/CitaDataInterface"
import Database from "../../Database"

export default class CitaDBC {
  private readonly citasDBLink = 'https://swapi.dev/api/films/'

  public findALL2 = async () => {
    const response = await fetch(this.citasDBLink)
    const data = await response.json()
    const citas = data.results

    return citas
  }

  public async findALL(): Promise<any> {
    const query = 'SELECT * FROM vista_citas';
    const resultado = await Database.executeQuery(query, []);
    return resultado
  }

  public async obtenerCitaPorID(id: number): Promise<any> {
    const query = 'CALL obtenerCita(?)';
    const resultado = await Database.executeQuery(query, [id]);
    return resultado
  }

  public createCita = async (cita: CitaDataInterface): Promise<any> => {
    const query = 'SELECT crearCita(?,?,?,?,?,?)'
    let resultado = await Database.executeQuery(query, [
      cita.tipo, 
      cita.descripcion,
      cita.fecha,
      cita.hora,
      cita.lugar,
      cita.id
    ])
    resultado = resultado[0]
    let res: any = 'Error DBC'
    for ( let key in resultado ){
      res = resultado[key]
      cita.id = parseInt(res)
      res = cita
    }
    return res
  }

  public async obtenerCitasCliente(id: number): Promise<any> {
    const query = 'CALL ObtenerCitasPorCliente(?)';
    let resultado = await Database.executeQuery(query, [id]);
    resultado = resultado[0]
    for (let citaDB of resultado) {
      citaDB.id = citaDB.idCITAS
    }
    return resultado
  }

  public async obtenerProximaCita(id: number): Promise<any> {
    const query = 'CALL ObtenerYActualizarProximaCita(?)';
    let resultado = await Database.executeQuery(query, [id]);
    resultado = resultado[0]
    for ( let key in resultado ){
      resultado = resultado[key]
    }
    return resultado
  }

  public async cerrarCita(id: number, anotaciones: string): Promise<any> {
    const query = 'CALL actualizarCitaCerrar(?,?)';
    let resultado = await Database.executeQuery(query, [id, anotaciones]);
    resultado = resultado[0]
    for ( let key in resultado ){
      resultado = resultado[key]
    }
    return resultado
  }
}
