import { Book } from "@prisma/client";
import { Request, Response } from "express";

const getBook = async (req:Request<{id:string}>,res:Response<Book|string>)=>{
    try{
        // find book using book id provided from the request param
        const book = await res.prisma.book.findFirstOrThrow({where:{id:req.params.id}})
        return res.send(book)
    }catch(err){
        return res.status(400).send("There is an error finding book")

    }
}

export default getBook