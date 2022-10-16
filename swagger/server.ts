import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.get('/swagger', (_req: Request, res: Response) => {
  res.send('oi1')
})

app.get('/', (_req: Request, res: Response) => {
  res.send('home')
})

app.listen(port, () => {
  return console.log(`Application running on port ${port}`)
})
