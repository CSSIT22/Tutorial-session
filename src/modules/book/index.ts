import express from 'express'
import addBookTag from './routes/addBookTag'
import getBook from './routes/getBook'
import registerBook from './routes/registerBook'

const bookRoutes = express()

bookRoutes.get("/:id",getBook)

bookRoutes.post("/addtype",addBookTag)

bookRoutes.post("/register",registerBook)

export default bookRoutes

