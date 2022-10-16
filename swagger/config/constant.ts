import type { Options } from 'swagger-jsdoc'

export const SWAGGER_DEFINITION: Options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API for JSONPlaceholder',
      version: '1.0.0'
    }
  },
  servers: [
    {
      url: 'http://127.0.0.1:5001/node-api-9f629/us-central1/myApiName',
      description: 'Development server'
    }
  ],
  apis: ['functions/src/api/router/*.ts']
}
