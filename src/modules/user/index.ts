import express from 'express'
import getUser from './routes/getUser'
import registerUser from './routes/registerUser'

const userRoutes = express()

userRoutes.get("/",getUser)

userRoutes.post("/register", registerUser)

export default userRoutes

