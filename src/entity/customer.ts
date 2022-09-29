class Customer {

  private _id: string;
  private _name: string;
  private _address: string;
  private _active: boolean;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._active = true;
    this.validate()
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }
  }
  
  changeName(name: string) {
    if (name.split(' ').length <= 1) {
      throw new Error('Invalid name, names must contain at least first and last name.')
    }
    this._name = name;
  }

  activate() {
    if (this._name.length === 0) {
      throw new Error('Name is required to activate a customer')
    }
    if (this._id.length === 0) {
      throw new Error('Id is required to activate a customer')
    }
    if (this._address.length === 0) {
      throw new Error('Address is required to activate a customer')
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}