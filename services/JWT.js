import jwt from 'jsonwebtoken'
import { env } from 'process'

export const  generateJWT=async(id,email)=>{
    
  const payload={
    id,
    email
  }
    try {
        const token = await jwt.sign(payload,env('JWT_TOKEN'))

        return token;
    } catch (error) {
          return error.message;
    }
}


export const validateJWT=async(bearer)=>{
  
   const validateToken=jwt.verify(bearer,env('JWT_TOKEN'));

   

}