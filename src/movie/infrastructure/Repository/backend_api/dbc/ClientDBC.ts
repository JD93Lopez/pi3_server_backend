import Database from "../../Database"

export default class ClientDBC {
  public async verifyById(id: string): Promise<any> {
    const query = 'SELECT verificar_cliente_asociado(?)';
    let resultado = (await Database.executeQuery(query, [id]))[0]
    let res = 'Error DBC'
    for ( let key in resultado ){
      res = resultado[key]
    }
    return res
  }

  public async save(item: any): Promise<any> {
    const query = 'CALL CrearCliente(?,?,?,?,?)'
    let resultado = (await Database.executeQuery(query, [
      item.identificacion, 
      item.nombres, 
      item.apellidos, 
      item.direccion, 
      item.fecha_natal
    ]))[0]
    resultado = resultado[0]
    let res = 'Error DBC'
    for ( let key in resultado ){
      res = resultado[key]
    }
    return res
  }

  public async obtenerClienteCompleto(id: number): Promise<any> {
    const query = 'CALL obtenerClienteCompleto(?)';
    let resultado = await Database.executeQuery(query, [id]);
    resultado = resultado[0][0]
    return resultado
  }
}
