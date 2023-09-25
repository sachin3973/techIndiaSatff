import { Product } from "src/domain/product"

export interface Switchboard {
  id: string,
  name: string,
  products: Product[],
  progress: number
}