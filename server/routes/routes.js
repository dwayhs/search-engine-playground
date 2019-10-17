export default function (app) {
  app.get('/', function(req, res) {
    res
      .status(200)
      .send({
        name: 'Search engine playground',
      })
  })
}