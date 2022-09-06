import { Request, Response, Router } from 'express'

export const initRestRoutes = (router: Router) => {
    const prefix = '/api/v1'

    router.get(prefix, (req: Request, res: Response) => res.send('You are using a physiocode REST API'))
}