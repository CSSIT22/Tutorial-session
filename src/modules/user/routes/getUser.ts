import { User } from '@prisma/client'
import {Request,Response} from 'express'
type getUserType = {
    id: string
}
const getUser = async (req:Request<any,any,getUserType,any>,res:Response<User|string>)=>{
    const prisma = res.prisma
    try{
        // find user using user id provided from the request
        const user = await prisma.user.findFirstOrThrow({where:{id:req.body.id}})
        return res.send(user)
    }catch(err){
        return res.status(400).send("There is an error finding user")
    }
    
}

export default getUser