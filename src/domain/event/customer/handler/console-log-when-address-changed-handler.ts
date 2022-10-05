import { EventHandlerInterface } from "../../@shared/event-handler-interface";
import { CustomerAddressChangedEvent } from "../customer-address-changed-event";

export class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface {
  handle (event: CustomerAddressChangedEvent): void {
    const customer = event.eventData
    console.log(`Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.address.toString()}`)
  }
}