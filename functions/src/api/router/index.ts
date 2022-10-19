import type { Request, Response } from 'express'
import { Router as expressRouter } from 'express'

import { HttpCode } from './../enum/http'
import { Routes } from './constants'

const router = expressRouter()

/**
 *  @swagger
 *  tags:
 *    name: Users
 *    description: User management
 */

/**
 *  @swagger
 *  definitions:
 *    User:
 *      required:
 *        - name
 *        - lastname
 *        - email
 *      properties:
 *        name:
 *          type: string
 *        lastname:
 *          type: string
 *        email:
 *          type: string
 *        age:
 *          type: number
 */

/**
 *  @swagger
 *  /user/{id}:
 *   get:
 *     tags: [Users]
 *     description: Welcome to swagger-jsdoc!
 *     parameters:
 *       - name: id
 *         description: User id to get details
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns user details
 *         schema:
 *           type: object
 *           $ref: '#definitions/User'
 *       400:
 *         description: Entity not found.
 */
router.get(Routes.USER_BY_ID, (_req: Request, res: Response) => {
  res.status(HttpCode.OK).send('route my user is working')
})

/**
 * @swagger
 * /user:
 *   post:
 *     description: Create a new user
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: User to be create
 *         in: body
 *         required: true
 *         schema: {
 *           $ref: '#/definitions/User'
 *         }
 *     responses:
 *       201:
 *         description: User created
 *         schema:
 *           type: object
 *           $ref: '#/definitions/User'
 */
router.post(Routes.NEW_USER, (_req: Request, res: Response) => {
  res.status(HttpCode.OK).send('user saved')
})

export default router
