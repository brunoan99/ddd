import { OrderItem } from "./order_item";

export default class Order {
  private id: string;
  private customerId: string;
  private items: OrderItem[] = [];

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
  }
}