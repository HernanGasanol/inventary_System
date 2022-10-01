import bcrypt from 'bcrypt'
import { prisma } from '../../prisma/prismaClient';
import {generateJWT} from'../JWT'




 export const loginService = async (email, password) => {
   try {

    let user= await prisma.user.findUnique({where: {email: email})
     
    if(!user) return false;

    let comparePassword=await bcrypt.compare(password,user.password);

    if(comparePassword) return false; 

    const token=await generateJWT(user.id,user.email)


    return {user.email,token}

    
   } catch (e) {
     return e
   }
 };