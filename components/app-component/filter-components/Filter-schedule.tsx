import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../../ui/calendar";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";
import { ordersData } from "../../../constants/ordersData";
export function FilterSchedule() {
  const [fromdate, setfromDate] = useState<Date>();
  const [todate, setToDate] = useState<Date>();
  // const formattedDate = format(date, 'EEE, dd MMM yyyy');
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-[13px]">
          Show orders for
        </label>
        <Select>
          <SelectTrigger className="shadow-sm">
            <SelectValue placeholder="All time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className=" h-[232px] overflow-y-auto scrollbar-thin scrollbar-track-slate-400 scrollbar-corner-white">
              {ordersData.map((val) => (
                <SelectItem value={val} key={val}>
                  {val}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[13px]">
            From
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !fromdate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromdate ? format(fromdate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={fromdate}
                onSelect={setfromDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[13px]">
            To
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !todate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {todate ? format(todate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={todate}
                onSelect={setToDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}
