import type { Request, Response } from 'express'
import { Router as expressRouter } from 'express'

import { HttpCode } from './../enum/http'
import { Routes } from './constants'

const router = expressRouter()

/**
 * @swagger
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
 *   post:
 *     summary: Save a new user
 *     description: Save a new user passed throught body request
 */
router.post(Routes.SAVE_USER, (_req: Request, res: Response) => {
  res.status(HttpCode.OK).send('user saved')
})

export default router
