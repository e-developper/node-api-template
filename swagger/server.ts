import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { SWAGGER_DEFINITION } from './config/constant'

import dotenv from 'dotenv'

dotenv.config()

const swaggerSchema = swaggerJSDoc(SWAGGER_DEFINITION)
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())

console.log(swaggerSchema);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSchema))

app.get('*', (_req: Request, res: Response) => {
  res.redirect('swagger')
})

app.listen(port, () => {
  return console.log(`Application running on port ${port}`)
})
