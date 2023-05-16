import express from 'express'
import {routerPet} from './pet'

export const routers = express.Router()

routers.use('/pet', routerPet)

