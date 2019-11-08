import Mapping from '../mapping/mapping'

export default class Index {
  constructor (name) {
    this.name = name
  }

  set mapping (mappingDefinition) {
    if (this._mapping) {
      throw new Error('Mapping already defined')
    }

    this._mapping = new Mapping(mappingDefinition)
  }

  get mapping () {
    return this._mapping
  }

  toJSON () {
    return {
      name: this.name,
    }
  }
}