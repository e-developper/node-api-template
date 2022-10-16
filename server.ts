import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
// import { config } from './config'

import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.get('/swagger', (_req: Request, res: Response) => {
  res.status(200).send('oi')
})

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('home')
})

app.listen(port, () => {
  return console.log(`Application running on port ${port}`)
})
