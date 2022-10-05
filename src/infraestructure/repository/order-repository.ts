import { Transaction } from "sequelize";
import sequelize from "sequelize/types/sequelize";
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

  findById(id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }
  
  async findAll(): Promise<Order[]> {
    return []
  }
}