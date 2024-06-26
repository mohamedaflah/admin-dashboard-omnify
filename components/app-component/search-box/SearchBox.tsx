import Image from "next/image";

export function SearchBox() {
  return (
    <div className="h-full px-3 flex gap-2 md:w-64 w-48 rounded-md shadow-md border">
      <Image alt="search" src={"/icons/search.svg"} width={17} height={17} />
      <input
        type="text"
        className="h-full w-full text-sm placeholder-textcolor-4 outline-none border-none"
        placeholder="Search client"
      />
    </div>
  );
}