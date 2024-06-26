import { cn } from "@/lib/utils";

interface ChildProp {
  title: string;
  count: string;
  className?: string;
}
export function TopBarBox({ title, count, className }: ChildProp) {
  return (
    <div
      className={cn(
        " flex items-center  border-2 border-textcolor-2 rounded-md xl:w-96 lg:w-64 sm:w-48 gap-2 flex-col sm:flex-row min-h-16  sm:min-h-10 p-2 md:p-0 md:px-3",
        className
      )}
    >
      <h1 className="text-sm font-semibold text-textcolor-1">{title}</h1>
      <span className="text-[12px] text-textcolor-2 font-semibold">
        {count}
      </span>
    </div>
  );
}
