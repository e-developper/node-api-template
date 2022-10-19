import type { Options } from 'swagger-jsdoc'

export const SWAGGER_DEFINITION: Options = {
  failOnErrors: true,
  definition: {
    swagger: '2.0',
    info: {
      title: 'Express API for JSONPlaceholder',
      version: '1.0.0'
    },
    host: 'https://swagger-temp.herokuapp.com/',
    basePath: '/api/v1'
  },
  apis: ['functions/src/api/router/*.ts']
}
