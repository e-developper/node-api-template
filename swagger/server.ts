import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { SWAGGER_DEFINITION } from './config/constant'
import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()
const schemaJson  = {
  "swagger": "2.0",
  "info": {
      "title": "PhysioCode API",
      "version": "1.0.0"
  },
  "host": "https://us-central1-physiocode-prd.cloudfunctions.net/app",
  "basePath": "/api/v1",
  "paths": {
      "/login": {
          "post": {
              "description": "Do sigin and return a custom token",
              "tags": [
                  "Login"
              ],
              "responses": {
                  "200": {
                      "description": "Logged with success",
                      "schema": {
                          "description": "Custom token",
                          "type": "string"
                      }
                  },
                  "400": {
                      "description": "Bad request"
                  },
                  "500": {
                      "description": "Internal server error"
                  }
              }
          }
      },
      "/user": {
          "post": {
              "description": "Create a new user",
              "tags": [
                  "Users"
              ],
              "parameters": [
                  {
                      "name": "body",
                      "description": "User info",
                      "in": "body",
                      "required": true,
                      "schema": {
                          "$ref": "#/definitions/NewUser"
                      }
                  }
              ],
              "responses": {
                  "201": {
                      "description": "User created",
                      "schema": {
                          "type": "string"
                      }
                  },
                  "400": {
                      "description": "Bad request"
                  },
                  "500": {
                      "description": "Internal server error"
                  }
              }
          }
      }
  },
  "definitions": {
      "NewUser": {
          "required": [
              "name",
              "password",
              "email"
          ],
          "properties": {
              "name": {
                  "type": "string"
              },
              "password": {
                  "type": "string"
              },
              "email": {
                  "type": "string"
              }
          }
      }
  },
  "responses": {},
  "parameters": {},
  "securityDefinitions": {},
  "tags": [
      {
          "name": "Users",
          "description": "User management"
      },
      {
          "name": "Login",
          "description": "Login management"
      }
  ]
}

const swaggerSchema = swaggerJSDoc(SWAGGER_DEFINITION)
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000', methods: '*'}))

console.log(swaggerSchema);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(schemaJson))

app.get('*', (_req: Request, res: Response) => {
  res.send('Not found page')
})

app.listen(port, () => {
  return console.log(`Application running on port ${port}`)
})
