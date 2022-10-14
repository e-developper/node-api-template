import { https } from 'firebase-functions'

import server from './api/server'

export const myApiName = https.onRequest(server)
