import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(
  cors({
      credentials: true,
      origin: true
  })
);
app.options('*', cors());

app.get('/swagger', (_req: Request, res: Response) => {
  res.status(200).send('oi')
})

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('home')
})

app.listen(port, () => {
  console.log(`Application running on poirt ${port}`)
})
