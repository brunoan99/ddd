import { OrderItem } from "./order_item";

export default class Order {
  
  private id: string;
  private customerId: string;
  private items: OrderItem[] = [];

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.validate()
  }

  validate() {
    if (this.id.length === 0) {
      throw new Error('Id is required')
    }
    if (this.customerId.length === 0) {
      throw new Error('CustomerId is required')
    }
    if (this.items.length === 0) {
      throw new Error('Items are required')
    }
  }

  total (): number {
    return this.items.reduce((acc ,item) => acc + item.price, 0)
  }
}