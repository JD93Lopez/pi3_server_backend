export default interface CerrarCitaServicePort {
  cerrar: (id: number, anotaciones: string) => Promise<number>
}