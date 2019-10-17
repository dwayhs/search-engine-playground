import IndexManager from './indexing/indexManager'

export default class SearchEngine {
  constructor () {
    this.indices = new IndexManager()
  }

  get version () {
    const packageJson = require('./package.json')
    return packageJson.version
  }
}