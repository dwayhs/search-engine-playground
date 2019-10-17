export default function (app) {
  const searchEngine = app.get('searchEngine')

  app.get('/', function(req, res) {
    res
      .status(200)
      .send({
        name: 'Search engine playground',
        searchEngine: {
          version: searchEngine.version,
        }
      })
  })

  app.post('/:indexName', function(req, res) {
    searchEngine.indices.create(req.params.indexName)

    res
      .status(201)
      .send({
        message: 'Index created'
      })
  })

  app.get('/_indices', function(req, res) {
    res
      .status(200)
      .send({
        indices: searchEngine.indices.all,
      })
  })
}