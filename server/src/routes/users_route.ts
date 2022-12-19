import express, { Request, Response, NextFunction } from 'express'
// import connect from '../config'
// import userBL from "../bl/usersBL"

const router = express.Router()

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  // let data = await userBL.getAllUsers();

  const data = ['TEST ']
  return res.json(data)
})

export default router
