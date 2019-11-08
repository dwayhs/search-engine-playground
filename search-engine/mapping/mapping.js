import MappingProperty from './mappingProperty'

export default class Mapping {
  constructor (mappingDefinition) {
    this._mappingDefinition = mappingDefinition

    this._properties = Object.keys(this._mappingDefinition)
      .reduce((mem, propertyName) => {
        mem[propertyName] = new MappingProperty(propertyName, this._mappingDefinition[propertyName].type)
        return mem
      }, {})
  }
}