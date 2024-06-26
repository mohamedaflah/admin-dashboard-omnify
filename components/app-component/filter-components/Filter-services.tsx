import Image from "next/image";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceType } from "@/constants/service-type";
import { statuses } from "@/constants/statuses";
export function FilterService() {
  const [searchOption, setSearchOption] = useState<"name" | "tags">("name");
  return (
    <>
      <RadioGroup
        className="w-full grid grid-cols-1 md:grid-cols-2 px-1"
        onValueChange={(value) => setSearchOption(value as "name" | "tags")}
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="name"
            id="name"
            checked={searchOption == "name"}
          />
          <label htmlFor="" className="text-sm">
            Search by name
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="tags"
            id="tags"
            checked={searchOption == "tags"}
          />
          <label htmlFor="" className="text-sm">
            Search by tags
          </label>
        </div>
      </RadioGroup>
      {searchOption == "tags" && (
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[13px]">
              Service type
            </label>
            <Select>
              <SelectTrigger className="shadow-sm">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className=" max-h-[232px] overflow-y-auto scrollbar-thin scrollbar-track-slate-400 scrollbar-corner-white">
                  {serviceType.map((val) => (
                    <SelectItem value={val} key={val}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[13px]">
              Status
            </label>
            <Select>
              <SelectTrigger className="shadow-sm">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className=" max-h-[232px] overflow-y-auto scrollbar-thin scrollbar-track-slate-400 scrollbar-corner-white">
                  {statuses.map((val) => (
                    <SelectItem value={val} key={val}>
                      {val}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      {searchOption == "name" && (
        <>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 h-10 border rounded-lg px-2">
              <Image
                src={"/icons/search.svg"}
                height={16}
                width={16}
                alt="Search"
              />
              <input
                className="w-full h-full outline-none border-none text-sm "
                placeholder="Search by service name"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
