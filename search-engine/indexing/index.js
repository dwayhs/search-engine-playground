export default class Index {
  constructor (name) {
    this.name = name
  }

  toJSON() {
    return {
      name: this.name,
    }
  }
}