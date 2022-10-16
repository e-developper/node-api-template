import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { config } from './config'

const app = express()

app.use(bodyParser.json())

app.get('/swagger', (_req: Request, res: Response) => {
  res.status(200).send('oi')
})

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('home')
})

app.listen(config.server.port, () => {
  return console.log(`Application running on port ${config.server.port}`)
})
