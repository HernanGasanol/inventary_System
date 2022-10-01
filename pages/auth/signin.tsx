import { NextPage } from 'next'
import axios from 'axios'
import React from 'react'
import { useForm } from '../../hooks/useForm'





const signin:NextPage = () => {
  
   const [values, reset, handleInputChange] = useForm({
     email: "",
     password: "",
   });

   const { email, password } = values;

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
      const res=await axios.post(
         "/api/auth/signin",
         { email, password },
         { headers: { "Content-Type": "application/json",  Authorization:`Bearer ${password}`, method:"POST" },  }
       );
      
       reset();
    
      } catch (error) {
       return error.message;
     }
   };

    return (
      <div>
        <form  onSubmit={handleSubmit} className="flex flex-col">
            <input type="text"  placeholder="email"  value={email} name="email" onChange={handleInputChange} />
            <input type="text"  placeholder="password" value={password} password={password}  name="password" onChange={handleInputChange} />
          
            <button type="submit">send</button>
        </form>
      </div>
    );
}

export default signin