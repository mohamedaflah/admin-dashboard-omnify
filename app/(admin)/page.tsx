import { TopBarBox } from "@/components/app-component/top-bar/top-bar-title";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
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
              <div className="h-full px-3 flex gap-2 md:w-64 w-48 rounded-md shadow-md border">
                <Image
                  alt="search"
                  src={"/icons/search.svg"}
                  width={17}
                  height={17}
                />
                <input
                  type="text"
                  className="h-full w-full text-sm placeholder-textcolor-4 outline-none border-none"
                  placeholder="Search client"
                />
              </div>
              <div className="h-full  items-center gap-8 hidden md:flex">
                <div>
                  <Image
                    src={"/icons/refresh.svg"}
                    alt="refresh"
                    width={19}
                    height={19}
                  />
                </div>
                <div>
                  <Image
                    src={"/icons/columns.svg"}
                    alt="refresh"
                    width={19}
                    height={19}
                  />
                </div>
                <div>
                  <Image
                    src={"/icons/download.svg"}
                    alt="refresh"
                    width={19}
                    height={19}
                  />
                </div>
              </div>
              <Popover>
                <PopoverTrigger>
                  <div className="sm:hidden flex items-center cursor-pointer">
                    <Menu className="w-5" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-16 flex-col flex gap-5 items-center">
                  <div>
                    <Image
                      src={"/icons/refresh.svg"}
                      alt="refresh"
                      width={19}
                      height={19}
                    />
                  </div>
                  <div>
                    <Image
                      src={"/icons/columns.svg"}
                      alt="refresh"
                      width={19}
                      height={19}
                    />
                  </div>
                  <div>
                    <Image
                      src={"/icons/download.svg"}
                      alt="refresh"
                      width={19}
                      height={19}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
