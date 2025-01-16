import { DefaultSession } from "next-auth";

declare module 'nex-auth'{
  interface Session{
    user: {
      id: string;
      name: string;
      username:string;
      role:string;
      email:string;
      emailVerified?: boolean;
    }&DefaultSession['user']
  }
}