"use client";
import { TableData } from "@/types/TableData";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { TableHeaderTitle } from "../../custom/TableHeaderTitle";
import { Status } from "../../custom/Status";
import { Checkbox } from "@/components/ui/checkbox";

export const adminTableColumns: ColumnDef<TableData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        className="shadow-lg outline-[#E5E7EB] border-none outline outline-2 mt-[6px]"
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        className="shadow-lg  outline-[#E5E7EB] border-none outline outline-2"
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "created_on",
    header: () => (
      <TableHeaderTitle image="/icons/created.svg" title="Created on" />
    ),
    cell: ({ row }) => {
      return (
        <div
          className="flex items-center h-full w-[168px]"
          
        >
          {row.getValue("created_on")}
        </div>
      );
    },
  },
  {
    accessorKey: "payer",
    header: () => <TableHeaderTitle image="/icons/user.svg" title="Payer" />,
    cell: ({ row }) => {
      return (
        <div className="flex items-center h-full w-[125px]">
          {row.getValue("payer")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <TableHeaderTitle image="/icons/status.svg" title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status");
      return <Status status={status as "Lead" | "Active" | "Inactive"} />;
    },
  },
  {
    accessorKey: "email",
    header: () => <TableHeaderTitle image="/icons/hash.svg" title="Email" />,
  },
  {
    accessorKey: "payer_phone",
    header: () => (
      <TableHeaderTitle image="/icons/hash.svg" title="Payer Phone" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center h-full w-[132px]">
          {row.getValue("payer_phone")}
        </div>
      );
    },
  },
  {
    accessorKey: "services",
    header: () => <TableHeaderTitle image="/icons/hash.svg" title="Services" />,
    cell: ({ row }) => {
      return (
        <div className="flex items-center h-full w-[160px]">
          {row.getValue("services")}
        </div>
      );
    },
  },
  {
    accessorKey: "scheduled",
    header: () => (
      <TableHeaderTitle image="/icons/created.svg" title="Scheduled" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center h-full w-[168px]">
          {row.getValue("scheduled")}
        </div>
      );
    },
  },
];
