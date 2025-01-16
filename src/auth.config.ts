import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { prisma } from './lib/prisma';
import bcryptjs from 'bcryptjs';


type UserToken = {
  id: string;
  name: string;
  username: string;
  role: string;
  email:string;
  emailVerified: Date | null;
}


export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account'
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    },
    session({ session, token }) {
      session.user = token.data as UserToken;
      return session;
    },
  },
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { username, password } = parsedCredentials.data;

        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) return null;

        if (!bcryptjs.compareSync(password, user.password)) return null;
        const userWithoutPassword = Object.fromEntries(
          Object.entries(user).filter(([key]) => key !== 'password')
        );
        return userWithoutPassword;
      },
    }),
  ]
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);