import express from 'express';
import userRoutes from './modules/user';
import { PrismaClient } from '@prisma/client'
import bookRoutes from './modules/book';
const prisma = new PrismaClient()

declare global{
    namespace Express{
        export interface Response{
            prisma : PrismaClient
        }
    }
}

const app = express()

app.use(express.json())

app.use((_,res,next)=>{
    res.prisma = prisma
    next()
})

app.use("/user", userRoutes)

app.use("/book",bookRoutes)

const port = 8000
app.listen(port, ()=>console.log(`running on ${port} 😽🚀🚀`))