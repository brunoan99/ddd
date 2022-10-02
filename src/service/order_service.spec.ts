import Order from "../entity/order"
import { OrderItem } from "../entity/order_item"
import { OrderService } from "./order_service"

describe('Product Service', () => {
  test('Should get total of all orders', () => {
    const orders = [
      new Order("1", "1", [
        new OrderItem("1", "1", "product1", 10, 5)]),
      new Order("2", "1", [
        new OrderItem("2", "2", "product2", 5, 5), 
        new OrderItem("3", "3", "product3", 5, 5)])
    ]
    const total = OrderService.total(orders)
    expect(total).toBe(100)
  })
})