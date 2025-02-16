import { AbstractItem } from "./AbstractItem"


export default class Item extends AbstractItem {
 
  constructor(id_item: number, name: string, cost: number) {
    super(id_item, name, cost)
  }

  isNull = (): boolean => {
    return false
  }
 
}
