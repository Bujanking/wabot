"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormEdit({ id, no, desc }: any) {
  const [newNo, setNewNo] = useState(no);
  const [newDesc, setNewDesc] = useState(desc);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application",
        },
        body: JSON.stringify({ newNo, newDesc }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        onChange={(e) => setNewNo(e.target.value)}
        value={newNo}
        type="text"
        placeholder="Input number"
        className="border border-slate-300 py-3 px-3 focus:outline-none"
      />
      <textarea
        onChange={(e) => setNewDesc(e.target.value)}
        value={newDesc}
        placeholder="Input description"
        className="border border-slate-300 py-3 px-3 focus:outline-none"
      ></textarea>
      <button
        type="submit"
        className="focus:outline-none text-white bg-[#25d366] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Update Data
      </button>
    </form>
  );
}
