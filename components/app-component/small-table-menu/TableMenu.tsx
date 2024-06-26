import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Image from "next/image";

export function SmallTableMenu() {
  return (
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
  );
}
