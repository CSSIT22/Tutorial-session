import { Request, Response } from "express";
import { User } from '@prisma/client'

type regUserType = {
    username : string
    password : string
    email : string
}

const registerUser = async (req:Request<any,any,regUserType>,res:Response<User|string>)=>{
    try{
        const prisma = res.prisma
        // Do not keep plain text password !!!!
        const user = await prisma.user.create({data:{...req.body}})
        // Do not send user's password !!!
        return res.send(user)
        
    }catch(err){
        return res.status(400).send("There is an error registering user")
    }
}

export default registerUser