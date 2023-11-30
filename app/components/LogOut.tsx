"use client"
import { signOut } from "next-auth/react";

export default function LogOut(){
    return(
         <button
        onClick={() => signOut()}
        className="bg-red-500 text-white font-medium px-6 py-2 mt-3"
      >
        Log Out
      </button> 
    )
}