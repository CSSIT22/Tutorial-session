import { BookType } from "@prisma/client";
import { Request, Response } from "express";

type addBookType = {
    name : string
}

// add book type into database

const addBookTag = (req:Request<any,any,addBookType>,res:Response<BookType>)=>{
    try{

    }catch(err){

    }
}

export default addBookTag