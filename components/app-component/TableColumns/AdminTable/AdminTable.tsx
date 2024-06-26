"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Image from "next/image";
import { SearchBox } from "../../search-box/SearchBox";
import { TableActionButtons } from "../../Table-actionbuttons/TableActionButtons";
import { SmallTableMenu } from "../../small-table-menu/TableMenu";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function AdminDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility,
    },
  });

  return (
    <div className="space-y-6">
      <div className="w-full flex  justify-between">
        <button className="h-9 sm:w-auto px-3 rounded-md bg-bgColor-2 flex gap-2 items-center">
          <Image width={19} height={19} src={"/icons/filter.svg"} alt="" />
          <span className="font-medium text-sm text-textcolor-1 hidden sm:flex">
            Add filter
          </span>
        </button>
        <div className="h-9 flex gap-6">
          <SearchBox />
          <div className="h-full  items-center gap-8 hidden md:flex">
            <div>
              <Image
                src={"/icons/refresh.svg"}
                alt="refresh"
                width={19}
                height={19}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <Image
                    src={"/icons/columns.svg"}
                    alt="refresh"
                    width={19}
                    height={19}
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>

            <div>
              <Image
                src={"/icons/download.svg"}
                alt="refresh"
                width={19}
                height={19}
              />
            </div>
          </div>
          <SmallTableMenu />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="overflow-hidden">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-bgColor-2 overflow-hidden rounded-tr-md rounded-tl-md"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="font-medium text-[13px]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="w-full py-4 flex justify-between">
        <div className="h-full flex items-center gap-1 ">
          <span className="text-sm text-textcolor-2">Displaying</span>
          <Select>
            <SelectTrigger className="border-none flex gap-2 bg-bgColor-1 outline-none ring-0 w-16">
              <SelectValue placeholder="15" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={"20"}>20</SelectItem>
                <SelectItem value={"25"}>25</SelectItem>
                <SelectItem value={"35"}>35</SelectItem>
                <SelectItem value={"40"}>40</SelectItem>
                <SelectItem value={"50"}>50</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <span className="text-sm text-textcolor-2 font-medium">
            Out of <span className="text-black">150</span>
          </span>
        </div>
        <div className="flex items-center space-x-2 ">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
