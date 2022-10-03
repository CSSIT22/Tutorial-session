import { Book } from "@prisma/client";
import { Request, Response } from "express";
type regBook = {
    name : string,
    description : string
    type : string[]
    userId: string
}

// register book using information from above to add new book
const registerBook = async (req:Request<any,any,regBook>,res:Response<Book|string>)=>{
    try{

    }catch(err){

    }
}

export default registerBook