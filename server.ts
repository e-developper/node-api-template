import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { config } from './config'

const app = express()

app.use(bodyParser.json())
app.use(
  cors({
    credentials: true,
    origin: true
  })
)
app.options('*', cors())

app.get('/swagger', (_req: Request, res: Response) => {
  res.status(200).send('oi')
})

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('home')
})

app.listen(config.server.port, () => {
  return console.log(`Application running on poirt ${config.server.port}`)
})
