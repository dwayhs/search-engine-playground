import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

const server = app.listen(3001, function () {
    console.log('app running on port.', server.address().port)
})