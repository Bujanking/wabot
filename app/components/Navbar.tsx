import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#075e54] flex justify-between p-4 rounded-md text-white items-center mb-5 border border-slate-300">
        <Link href={"/"} className="flex items-center gap-3 text-lg">
          <Image src="whatsapp-icon.svg" alt="logo" width={25} height={25} />{" "}
          Whatsapp Bot
        </Link>
        <div>
          <Link
            href={"/addData"}
            type="button"
            className="focus:outline-none text-white bg-[#25d366] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Data
          </Link>

          <Link
            href={"/profile"}
            type="button"
          >
            Proflie
          </Link>
        </div>
      </div>
    </>
  );
}
