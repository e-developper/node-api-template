import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import config from 'config'

const port = process.env.PORT || config.get('server.port')
const app = express()

app.use(bodyParser.json())

app.get('/swagger', (_req: Request, res: Response) => {
  res.status(200).send('oi')
})

app.listen(port, () => {
  console.log(`Application running on poirt ${port}`)
})
