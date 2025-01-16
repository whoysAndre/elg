'use server'
import {prisma} from '../../lib/prisma';
import bcryptjs from 'bcryptjs';

export const RegisterUser = async(name:string, username:string, password:string)=>{
  try {
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password: bcryptjs.hashSync(password)
      },
      select: {
        id:true,
        name:true,
        username: true
      }
    })

    return{
      ok:true,
      user: user,
      message: 'Usuario creado'
    }


  } catch (error) {
    console.log(error);
    return{
      ok:false,
      message: 'No se pudo crear usuario'
    }
  }

};