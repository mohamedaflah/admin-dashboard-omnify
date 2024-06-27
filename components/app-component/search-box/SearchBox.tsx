"use client";
import { DataContext } from "@/app/(admin)/page";
import { TableData } from "@/types/TableData";
import Image from "next/image";
import { SetStateAction, useContext, useEffect, useState } from "react";

export function SearchBox() {
  const [searchVal, setSearchVal] = useState<string>("");
  const { data, setData }: any = useContext(DataContext);
  // { data: TableData[]; setData: React.Dispatch<SetStateAction<TableData[]>> }

  useEffect(() => {
    setData((prev: any) =>
      prev?.filter((data: any) => data.payer.search(searchVal))
    );
  }, [searchVal, setData]);
  return (
    <div className="h-full px-3 flex gap-2 md:w-64 w-48 rounded-md shadow-md border-t">
      <Image alt="search" src={"/icons/search.svg"} width={17} height={17} />
      <input
        type="text"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        className="h-full w-full text-sm placeholder-textcolor-4 outline-none border-none"
        placeholder="Search client"
      />
    </div>
  );
}
