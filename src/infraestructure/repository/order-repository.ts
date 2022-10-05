import { Order } from "../../domain/entity/order";
import { OrderItem } from "../../domain/entity/order_item";
import { OrderRepositoryInterface } from "../../domain/repository/order-repository-interface";
import { OrderModel } from "../db/sequelize/model/order";
import { OrderItemModel } from "../db/sequelize/model/order-item";

export class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  update(entity: Order): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Order> {
    let orderModel;
    try {
      orderModel = await OrderModel.findOne({
        where: {
          id,
        },
        rejectOnEmpty: true,
        include: [{ model: OrderItemModel }],
      });
    } catch (error) {
      throw new Error(`Order not found with id: ${id}`)
    }
    const orderItems: OrderItem[] = []
    for (const orderItem of orderModel.items) {
      orderItems.push(new OrderItem(orderItem.id, orderItem.product_id, orderItem.name, orderItem.price, orderItem.quantity))
    }
    const order = new Order(orderModel.id, orderModel.customer_id, orderItems)
    return order
  }
  
  async findAll(): Promise<Order[]> {
    const orderModels = await OrderModel.findAll({ include: [{ model: OrderItemModel }] });
    return orderModels.map((order) => {
      const orderItems = order.items.map((item) => {
        return new OrderItem(item.id, item.product_id, item.name, item.price, item.quantity)
      })
      return new Order(order.id, order.customer_id, orderItems)
    })
  }
}