import bcrypt from 'bcrypt'
import { prisma } from '../../prisma/prismaClient';




 export const registerService = async (email, password) => {
   try {
     let salt = await bcrypt.genSalt(10);
     let hashedPassword = await bcrypt.hash(password, salt);

     let user = await prisma.user.create({
       data: {
         email: email,
         password: hashedPassword,
       },
     });

     return user.email;
   } catch (e) {
     return e
   }
 };