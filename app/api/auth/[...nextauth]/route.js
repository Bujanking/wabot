import connectMongoDB from "@/libs/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '@/models/user';
import bcrypt from 'bcryptjs'

export const authOption = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const {email, password} = credentials;
                try {
                    await connectMongoDB();
                    const account = await User.findOne({ email })

                    if (!account){
                        return null
                    }

                    const passwordMatch = await bcrypt.compare(password, account.password)
                    if(!passwordMatch){
                        return null
                    }
                    return account;

                } catch (error) {
                    console.log("Error: ", error)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOption)
export {handler as GET, handler as POST}