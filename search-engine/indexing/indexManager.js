import Index from './index'

export default class IndexManager {
  constructor () {
    this._indices = []
  }

  get all () {
    return this._indices
  }

  byName (indexName) {
    return this._indices
      .find(index => index.name === indexName)
  }

  create (indexName) {
    const newIndex = new Index(indexName)

    this._indices.push(newIndex)

    return newIndex
  }
}