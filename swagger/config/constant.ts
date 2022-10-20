import type { Options } from 'swagger-jsdoc'

export const SWAGGER_DEFINITION: Options = {
  failOnErrors: true,
  definition: {
    swagger: '2.0',
    info: {
      title: 'PhysioCode API',
      version: '1.0.0'
    },
    host: 'https://us-central1-physiocode-prd.cloudfunctions.net/app',
    basePath: '/api/v1'
  },
  apis: ['functions/src/api/router/*.ts']
}
