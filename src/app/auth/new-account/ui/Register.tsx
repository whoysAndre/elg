'use client'
import { login } from "@/actions/auth/login";
import { RegisterUser } from "@/actions/auth/register";
import { titleFont } from "@/config/fonts"
import clsx from "clsx";
import Link from "next/link"

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  username: string;
  password: string;
}

export const Register = () => {
  

  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState: {errors}  } = useForm<FormInputs>();
  const onSubmit = async (data:FormInputs)=>{
    const { username,name, password } = data;
    const resp = await RegisterUser(name,username,password);

    if(!resp.ok){
      setErrorMessage(resp.message);
      return;
    }

    await login(username.toLowerCase(),password);
    window.location.replace('/');
  };
  
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

    
      <label className={`${titleFont.className}`} htmlFor="name">Nombre</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500' : errors.name
            }
          )
        }
        id='name'
        type="text"
        autoFocus
        {...register('name',{required:true})}

      />

      <label className={`${titleFont.className}`} htmlFor="username">Ingrese nombre de usuario</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500' : errors.username
            }
          )
        }
        id='username'
        type="text"
        {...register('username',{required:true})}
      />


      <label className={`${titleFont.className}`} htmlFor="password">Contraseña</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500' : errors.password
            }
          )
        }
        id='password'
        type="password"
        {...register('password',{required:true,minLength:6})}
      />

      <span className="text-red-500">{errorMessage}</span>

      <button
        className="btn-primary">
        Crear cuenta
      </button>


      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/login"
        className={`btn-secondary text-center ${titleFont.className}`}>
        Volver
      </Link>

    </form>
  )
}