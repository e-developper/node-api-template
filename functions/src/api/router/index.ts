/* eslint-disable max-len */
import type { Request, Response } from 'express'
import { Router as expressRouter } from 'express'

import { HttpCode } from './../enum/http'
import { Routes } from './constants'

const router = expressRouter()

/**
 * @openapi
 * /my-user:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get(Routes.MY_USER, (_req: Request, res: Response) => {
  res.status(HttpCode.OK).send('route my user is working')
})

/**
 * @swagger
 * /save-user:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.get(Routes.SAVE_USER, (_req: Request, res: Response) => {
  res.status(HttpCode.OK).send('user saved')
})

export default router
