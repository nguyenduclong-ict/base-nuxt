import morgan from 'morgan'
import cors from 'cors'
import { Router } from 'express'
import express from 'express'

const api = Router()

api.use(cors())
api.use(express.json())
api.use(morgan('short'))

api.get('/', (req, res, next) => {
  res.send('sever running!')
})

export default api
