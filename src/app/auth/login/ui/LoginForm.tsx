'use client'
import { authenticate } from "@/actions/auth/login";
import { titleFont } from "@/config/fonts";
import clsx from "clsx";
import Link from "next/link"
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {
  const [state, dispatch] = useActionState(authenticate, undefined);
  useEffect(() => {
    if (state === 'Success') {
      window.location.replace('/');
    };
  }, [state]);

  return (
    <form action={dispatch} className="flex flex-col">

      <label className={`${titleFont.className}`} htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        id='username'
        type="text"
        name="username"
      />


      <label className={`${titleFont.className}`} htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        id='password'
        type="password"
        name="password"
      />


      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === 'CredentialsSignIn' && (
          <div className=" flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">Credenciales Incorrecta</p>
          </div>
        )}
      </div>

      <LoginButton />


      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      {/* <Link
        href="/auth/new-account"
        className={`btn-secondary text-center ${titleFont.className}`}>
        Crear una nueva cuenta
      </Link> */}

    </form>
  )
}


function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={
        clsx({
          "btn-primary": !pending,
          "btn-disable": pending
        })
      }
      disabled={pending}
    >
      Ingresar
    </button>
  );
}