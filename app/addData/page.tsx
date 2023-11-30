"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddData() {
  const [no, setNo] = useState("");
  const [desc, setDesc] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!no || !desc) {
      alert("No and Desc are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ no, desc }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input number"
          className="border border-slate-300 py-3 px-3 focus:outline-none"
          onChange={(e) => setNo(e.target.value)}
          value={no}
        />
        <textarea
          placeholder="Input description"
          className="border border-slate-300 py-3 px-3 focus:outline-none"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
        <button
          type="submit"
          className="focus:outline-none text-white bg-[#25d366] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Data
        </button>
      </form>
    </>
  );
}
