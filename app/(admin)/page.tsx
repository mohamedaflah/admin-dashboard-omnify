import { TableActionButtons } from "@/components/app-component/Table-actionbuttons/TableActionButtons";
import { AdminDataTable } from "@/components/app-component/TableColumns/AdminTable/AdminTable";
import { adminTableColumns } from "@/components/app-component/TableColumns/AdminTable/Column";
import { SearchBox } from "@/components/app-component/search-box/SearchBox";
import { SmallTableMenu } from "@/components/app-component/small-table-menu/TableMenu";
import { TopBarBox } from "@/components/app-component/top-bar/top-bar-title";

import { TableDatas } from "@/constants/TableDemmydata";

import Image from "next/image";

export default function Home() {
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
          <div className="w-full flex  justify-between">
            <button className="h-9 sm:w-auto px-3 rounded-md bg-bgColor-2 flex gap-2 items-center">
              <Image width={19} height={19} src={"/icons/filter.svg"} alt="" />
              <span className="font-medium text-sm text-textcolor-1 hidden sm:flex">
                Add filter
              </span>
            </button>
            <div className="h-9 flex gap-6">
              <SearchBox />
              <TableActionButtons />
              <SmallTableMenu />
            </div>
          </div>
          <div className="w-full ">
            <AdminDataTable columns={adminTableColumns} data={TableDatas}/>
          </div>
        </div>
      </div>
    </main>
  );
}
