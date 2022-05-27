import { Router } from 'express'

const spaRouter = Router()

const spaPaths = ['/admin', '/test']

spaPaths.forEach((path) => {
  spaRouter.use(path, (req, res, next) => {
    req.spa = true
    next()
  })
})

export default spaRouter
