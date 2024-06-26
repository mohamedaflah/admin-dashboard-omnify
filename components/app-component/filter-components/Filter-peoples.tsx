import { Checkbox } from "@/components/ui/checkbox";
import { TableDatas } from "@/constants/TableDemmydata";
import { TableData } from "@/types/TableData";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
export function FilterPeoples() {
  const [peoples, setPeoples] = useState<TableData[]>([]);
  const [searchVal, setSearchVal] = useState<string>("");
  useEffect(() => {
    if (searchVal.trim() === "") {
      setPeoples([]);
    } else {
      const filteredPeoples = TableDatas.filter((data) =>
        data.payer.toLowerCase().includes(searchVal.toLowerCase())
      );

      // Use a Set to ensure unique entries
      const uniquePeoples = Array.from(
        new Set(filteredPeoples.map((item) => item.payer))
      ).map((payer) => filteredPeoples.find((item) => item.payer === payer));
      setPeoples(uniquePeoples as SetStateAction<TableData[]>);
    }
  }, [searchVal]);
  const [selectedPeoples, setSelectedPeoples] = useState<TableData[]>([]);
  return (
    <div className="h-[300px] overflow-y-auto scrollbar-thin">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 h-10 border rounded-lg px-2">
          <Image
            src={"/icons/search.svg"}
            height={16}
            width={16}
            alt="Search"
          />
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full h-full outline-none border-none text-sm "
            placeholder="Search Payer or attendee name"
          />
        </div>
      </div>
      <div className="w-full space-y-2 mt-2">
        {selectedPeoples.map((people) => (
          <div key={people.email} className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <Checkbox
                className="border-textcolor outline-2 shadow-sm"
                checked
                onCheckedChange={(val) =>
                  val
                    ? setSelectedPeoples((prev) => [...prev, people])
                    : setSelectedPeoples((prev) =>
                        prev.filter((value) => value.payer !== people.payer)
                      )
                }
              />
              {people.payer}
            </div>
            <div className="px-3 bg-[#F8FAFC] text-[12.3px] items-center h-5">
              Payer
            </div>
          </div>
        ))}
      </div>

      {peoples.length >= 1 && (
        <>
          <div className="w-full">
            <div className="mt-3">
              Showing {peoples.length} users with {`'${searchVal}'`}
            </div>
            <div className="w-full mt-5  space-y-2">
              {peoples.map((people) => (
                <div key={people.payer} className="flex gap-4 items-center">
                  <div className="flex gap-2 items-center">
                    <Checkbox
                      className="border-textcolor outline-2 shadow-sm"
                      onCheckedChange={(val) =>
                        val
                          ? setSelectedPeoples((prev) => [...prev, people])
                          : setSelectedPeoples((prev) =>
                              prev.filter(
                                (value) => value.payer !== people.payer
                              )
                            )
                      }
                    />
                    {people.payer}
                  </div>
                  <div className="px-3 bg-[#F8FAFC] text-[12.3px] items-center h-5">
                    Payer
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
