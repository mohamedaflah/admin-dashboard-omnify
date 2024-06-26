import { cn } from "@/lib/utils";
import { TableData } from "@/types/TableData";

interface ChildProp {
  status: "Lead" | "Active" | "Inactive";
}
export function Status({ status }: ChildProp) {
  return (
    <div
      className={cn("w-24 h-9 flex items-center justify-center gap-2 rounded-2xl", {
        "bg-[#EFF6FF]": status === "Lead",
        "bg-[#F0FDF9]": status === "Active",
        "bg-[#F1F5F9]": status === "Inactive",
      })}
    >
      <div
        className={cn("size-2 rounded-full", {
          "bg-[#3B82F6]": status === "Lead",
          "bg-[#15803D]": status === "Active",
          "bg-[#334155]": status === "Inactive",
        })}
      />
      <span
        className={cn({
          "text-[#3B82F6]": status === "Lead",
          "text-[#15803D]": status === "Active",
          "text-[#334155]": status === "Inactive",
        })}
      >
        {status}
      </span>
    </div>
  );
}
