import { Request, Response } from 'express'

export default function indexController (req: Request, res: Response) {
	res.send('this works')
}
