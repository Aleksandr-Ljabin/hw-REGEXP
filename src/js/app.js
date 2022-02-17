export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const regOne = /^[^-_0-9][a-z0-9-_]+[^-_0-9]$/igm;
    const regTwo = /\d{4,}/gm;
    if (regOne.test(this.name) === true && regTwo.test(this.name) === false) {
      return true;
    } else {
      return false;
    }
  }
}
