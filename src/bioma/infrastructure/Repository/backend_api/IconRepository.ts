import IconDBC from "./dbc/IconDBC"

export default class IconRepository {
  private readonly iconDBC: IconDBC

  constructor() {
    this.iconDBC = new IconDBC()
  }

  getIconImageById = async (id_icon: number): Promise<string> => {
    const iconFromDB = await this.iconDBC.getIconById(id_icon)
    
    const image = iconFromDB["image"]
    return image
  }
}