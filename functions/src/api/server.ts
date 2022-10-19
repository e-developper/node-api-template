import bodyParser from 'body-parser'
import express from 'express'

import router from './router'
import { BASE_ROUTE } from './router/constants'

const server = express()

server.use(bodyParser.json())

server.use(BASE_ROUTE, router)

export default server
