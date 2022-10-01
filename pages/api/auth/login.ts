import { request } from "http";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { loginService } from "../../../services/auth/login.service";


 interface res{
email:String, token:String
}

type user= res | boolean;


export default async function login(
    req:NextApiRequest,
    res:NextApiResponse){
      
        req.method != "POST" || !req.body && res.status(400).json({msg:"bad request"});
        
        try {

            const {email,password} = req.body;
            
            const response:user=await loginService(email,password);

            if(!response) return res.status(400).json({msg:"bad request"});

            return response;

        
        
        } catch (error) {
            
        }
  

    

}