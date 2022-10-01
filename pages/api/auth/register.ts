import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaClient";
import { registerService } from "../../../services/auth/register.service";





export default async function register(req: NextApiRequest, res: NextApiResponse) {
  
     req.method != "POST" && res.status(400).json({msg:"bad request"});
    
        try {
            
            let user=await prisma.user.findUnique({where:{email:req.body.email}})

            if(user) return res.status(400).json({msg:"these user is already exists"});
           
             user = await registerService(req.body.email,req.body.password);

             return res.status(200).json({msg:"user created successfully",user:user});
       
            } catch (e) {
            return res.status(500).json({msg:"error creating user",e.message})
        }

        
  
}