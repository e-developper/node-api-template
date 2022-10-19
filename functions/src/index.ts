import admin from 'firebase-admin'
import { https } from 'firebase-functions'

import server from './api/server'

admin.initializeApp()

export const myApiName = https.onRequest(server)
