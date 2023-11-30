"use client";
import { BiTrash } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: any) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic}>
      <BiTrash className="text-red-500" size={24} />
    </button>
  );
}
