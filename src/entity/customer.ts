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
  }
  
  changeName(name: string) {
    if (name.split(' ').length <= 1) {
      return new Error('Invalid name, names must contain at least first and last name.')
    }
    this._name = name;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}