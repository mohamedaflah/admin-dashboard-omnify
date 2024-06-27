"use client";
import { AdminDataTable } from "@/components/app-component/TableColumns/AdminTable/AdminTable";
import { adminTableColumns } from "@/components/app-component/TableColumns/AdminTable/Column";

import { TopBarBox } from "@/components/app-component/top-bar/top-bar-title";

import { TableDatas } from "@/constants/TableDemmydata";
import AOS from "aos";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import "aos/dist/aos.css";
import { createContext } from "react";
import { TableData } from "@/types/TableData";

interface DataContextType {
  data: TableData[];
  setData: React.Dispatch<React.SetStateAction<TableData[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<TableData[]>(TableDatas);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  // Create the context with default values
  const { data, setData }: any = useContext(DataContext);
  
  console.log("🚀 ~ Home ~ data:", data);
  return (
    <main className="w-full h-full overflow-x-hidden scrollbar-none bg-white py-2 px-3 rounded-md">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full">
          <h1 className="text-[19px] text-textcolor-1 font-semibold">
            Waitlist
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="gap-4 min-h-10 flex flex-col sm:flex-row ">
            <TopBarBox title="All waitlist" count="100" />
            <TopBarBox
              title="Newly Added"
              count="50"
              className="border-2 border-borderColor"
            />
            <TopBarBox
              title="Leads"
              count="20"
              className="border-2 border-borderColor"
            />
          </div>
          <div className="w-full ">
            <AdminDataTable columns={adminTableColumns} data={TableDatas} />
          </div>
        </div>
      </div>
    </main>
  );
}
