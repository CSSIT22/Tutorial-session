import { BookType } from "@prisma/client";
import { Request, Response } from "express";

type addBookType = {
    name : string
}

// add book type into database

const addBookTag = async (req:Request<any,any,addBookType>,res:Response<BookType|string>)=>{
    try{
        const {prisma} = res
        const bookType = await prisma.bookType.create({data:{type:req.body.name}})
        return res.send(bookType)
    }catch(err){
        return res.status(400).send("Error")
    }
}

export default addBookTag