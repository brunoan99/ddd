import { Address } from "../../../entity/address"
import { Customer } from "../../../entity/customer"
import { EventDispatcher } from "../../@shared/event-dispatcher"
import { CustomerAddressChangedEvent } from "../customer-address-changed-event"
import { ConsoleLogWhenCustomerAddressChangeHandler } from "./console-log-when-address-changed-handler"

describe('Console Log When Address Change Handler Event', () => {
  test('Should call console.log with correct data', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const sut = new ConsoleLogWhenCustomerAddressChangeHandler()
    const eventDispatcher = new EventDispatcher()
    eventDispatcher.register('CustomerAddressChangedEvent', sut)

    const customer = new Customer("1", "Customer 1")
    const address = new Address("Rua 1", 1, "zip", "city")
    customer.changeAddress(address)
    const event = new CustomerAddressChangedEvent(customer)
    eventDispatcher.notify(event)
    expect(consoleSpy).toHaveBeenCalledWith(`Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.address.toString()}`)
  })
})