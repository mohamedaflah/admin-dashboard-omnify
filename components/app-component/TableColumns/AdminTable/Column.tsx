"use client";
import { TableData } from "@/types/TableData";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { TableHeaderTitle } from "../../custom/TableHeaderTitle";
import { Status } from "../../custom/Status";

export const adminTableColumns: ColumnDef<TableData>[] = [
  {
    accessorKey: "created_on",
    header: () => (
      <TableHeaderTitle image="/icons/created.svg" title="Created on" />
    ),
  },
  {
    accessorKey: "payer",
    header: () => <TableHeaderTitle image="/icons/user.svg" title="Payer" />,
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
  },
  {
    accessorKey: "services",
    header: () => <TableHeaderTitle image="/icons/hash.svg" title="Services" />,
  },
  {
    accessorKey: "scheduled",
    header: () => (
      <TableHeaderTitle image="/icons/created.svg" title="Scheduled" />
    ),
  },
];
