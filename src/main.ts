import Order from "./entity/order"
import { OrderItem } from "./entity/order_item"

const customer = new Customer("123", "Bruno Andrade");
customer.Address = new Address("Rua Um", 1, "12345678", "Cidade");
customer.activate();

const item1 = new OrderItem("1", "Pedra", 1);
const item2 = new OrderItem("2", "Papel", 2);
const item3 = new OrderItem("3", "Tesoura", 3);

const order = new Order("1", "123", [ item1, item2, item3 ]);