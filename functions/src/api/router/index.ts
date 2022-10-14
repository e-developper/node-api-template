import type { Request, Response } from 'express'
import { Router as expressRouter } from 'express'

import { HttpCode } from './../enum/http'
import { Routes } from './constants'

const router = expressRouter()

router.get(Routes.MY_USER, (_req: Request, res: Response) => {
  res.status(HttpCode.OK).send('route my user is working')
})

router.get(Routes.SAVE_USER, (_req: Request, res: Response) => {
  res.status(HttpCode.OK).send('user saved')
})

export default router
