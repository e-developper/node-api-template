/* eslint-disable quote-props */
// import bodyParser from 'body-parser'
import type { Request, Response } from 'express'
import express from 'express'
import { logger } from 'firebase-functions'

import swaggerJSDoc from 'swagger-jsdoc'

import swaggerUi from 'swagger-ui-express'

import { SWAGGER_DEFINITION } from './config/swagger/constant'
import { HttpCode } from './enum/http'

import router from './router'
import { BASE_ROUTE, SWAGGER_ROUTE } from './router/constants'

// import swaggerSchema from '../config/swagger/swagger.json'

const swagger = {
  swagger: '2.0',
  info: {
    title: 'Blah',
    description: '',
    version: '1.0'
  },
  produces: ['application/json'],
  paths: {
    '/test': {
      post: {
        'x-swagger-router-controller': 'home',
        operationId: 'index',
        tags: ['/test'],
        description: '[Login 123](https://www.google.com)',
        parameters: [
          {
            name: 'test',
            in: 'formData',
            type: 'array',
            collectionFormat: 'multi',
            items: {
              type: 'integer'
            }
          },
          { name: 'profileId', in: 'formData', required: true, type: 'string' },
          { name: 'file', in: 'formData', type: 'file', required: 'true' }
        ],
        responses: {}
      }
    },
    '/bar': {
      get: {
        'x-swagger-router-controller': 'bar',
        operationId: 'impossible',
        tags: ['/test'],
        description: '',
        parameters: [],
        responses: {}
      }
    }
  }
}
const swaggerSchema = swaggerJSDoc(SWAGGER_DEFINITION)
const server = express()

// server.use(bodyParser.json())
// server.use(bodyParser.urlencoded({ extended: false }))
server.use(SWAGGER_ROUTE, swaggerUi.serve, swaggerUi.setup(swaggerSchema))
// router.get(SWAGGER_ROUTE, (req, res) => {
//   logger.log(JSON.stringify(swaggerUi.setup(swaggerSchema)))
//   res.status(200).send(JSON.stringify(swaggerUi.setup(swaggerSchema)))
// })

// const options = {
//   validatorUrl: null,
//   oauth: {
//     clientId: 'your-client-id1',
//     clientSecret: 'your-client-secret-if-required1',
//     realm: 'your-realms1',
//     appName: 'your-app-name1',
//     scopeSeparator: ',',
//     additionalQueryStringParams: {}
//   },
//   docExpansion: 'full',
//   // eslint-disable-next-line prettier/prettier
//   operationsSorter: function(a, b) {
//     const score = {
//       '/test': 1,
//       '/bar': 2
//     }
//     console.log('a', a.get('path'), b.get('path'))

//     return score[a.get('path')] < score[b.get('path')]
//   }
// }

// const swaggerUiOpts = {
//   explorer: false,
//   swaggerOptions: options,
//   customCss: '.swagger-ui .topbar { background-color: blue }'
// }

// eslint-disable-next-line max-len
const options = {
  validatorUrl: null,
  oauth: {
    clientId: 'your-client-id1',
    clientSecret: 'your-client-secret-if-required1',
    realm: 'your-realms1',
    appName: 'your-app-name1',
    scopeSeparator: ',',
    additionalQueryStringParams: {}
  },
  docExpansion: 'full',
  // eslint-disable-next-line prettier/prettier
  operationsSorter: function (a, b) {
    const score = {
      '/test': 1,
      '/bar': 2
    }
    console.log('a', a.get('path'), b.get('path'))

    return score[a.get('path')] < score[b.get('path')]
  }
}

const swaggerUiOpts = {
  explorer: false,
  swaggerOptions: options,
  customCss: '.swagger-ui .topbar { background-color: blue }'
}
const html = swaggerUi.generateHTML(swaggerSchema, swaggerUiOpts)

router.use('SWAGGER_ROUTE', swaggerUi.setup(swagger, swaggerUiOpts))
router.get(SWAGGER_ROUTE, (_req: Request, res: Response) => {
  logger.log(html)
  // eslint-disable-next-line max-len
  res.status(HttpCode.OK).contentType('html').send(html)
})

server.use(BASE_ROUTE, router)
// server.get(SWAGGER_ROUTE, (_req: Request, res: Response) => {
//   logger.info(swaggerUi.setup(swaggerSchema))
//   res.status(HttpCode.OK).send(swaggerSchema)
// })

// logger.log(swaggerSchema)

// server.listen(3000)

export default server
