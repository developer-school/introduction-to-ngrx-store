import { ShoppingItem } from './shopping-item.model';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean
}