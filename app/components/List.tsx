import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import DeleteButton from "./DeleteButton";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics!");
    }
    return res.json();
  } catch (error) {
    console.log("Error load topics", error);
  }
};

export default async function List() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t: any) => (
        <div
          className="border border-slate-400 rounded-md px-6 py-2 flex justify-between items-center mb-5"
          key={t._id}
        >
          <div>
            <h1 className="text-2xl font-bold">{t.no}</h1>
            <div className="text-slate-800">{t.desc}</div>
          </div>
          <div className="flex gap-2">
            <Link href={"/"}>
              <DeleteButton id={t._id} />
            </Link>
            <Link href={`/editData/${t._id}`}>
              <BiEdit className="text-[#128c7e]" size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
