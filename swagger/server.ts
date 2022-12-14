import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { SWAGGER_DEFINITION } from './config/constant'
import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()

const swaggerSchema = swaggerJSDoc(SWAGGER_DEFINITION)
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000', methods: '*'}))

console.log(swaggerSchema);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSchema))

app.get('*', (_req: Request, res: Response) => {
  res.send('Not found page')
})

app.listen(port, () => {
  return console.log(`Application running on port ${port}`)
})
