"use client"
import { useSession } from "next-auth/react";

export default function profile(){
    const { data: session } = useSession();
    return(
        <div>
            <p>Name : {session?.user?.name}</p>
            <p>Email : {session?.user?.email}</p>
        </div>
    )
}