import { Book } from "@prisma/client";
import { Request, Response } from "express";
type regBook = {
    name : string,
    description : string
    type : string[]
    userId: string
}

// register book using information from above to add new book
// add the request book to book table
// connect the booktype to book table and bookType table using BookToType table's as a middleman.
const registerBook = async (req:Request<any,any,regBook>,res:Response<Book|string>)=>{
    try{
        const {prisma} = res
        const {description,name,type,userId} = req.body
        const book = await prisma.book.create({data:{description,name,authorId:userId,type:{createMany:{data:[...type.map(item=>({typeName:item}))]}}}})
        return res.send(book)
    }catch(err){
        return res.status(400).send("Error")
    }
}

export default registerBook