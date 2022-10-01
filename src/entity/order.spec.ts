import Order from "./order"

describe('Order', () => {
  test('Should throw error when id is empty', () => {
    expect(() => {
      new Order("", "1", [])
    }).toThrowError("Id is required")
  })

  test('Should throw error when customerId is empty', () => {
    expect(() => {
      new Order("1", "", [])
    }).toThrowError("CustomerId is required")
  })

  test('Should throw error when items are empty', () => {
    expect(() => {
      new Order("1", "1", [])
    }).toThrowError("Items are required")
  })

  test('Should return no error when value values are provided', () => {
    expect(() => {
      new Order("1", "1", [{ id: "1", name: "Pedra", price: 1}])
    }).not.toThrowError()
  })

  test('Should calculate total', () => {
    const order = new Order(
      "1", 
      "1", 
      [
        { id: "1", name: "Pedra", price: 1},
        { id: "2", name: "Papel", price: 2},
        { id: "3", name: "Tesoura", price: 3},
      ]
    )
    expect(order.total()).toBe(6)
  })
})