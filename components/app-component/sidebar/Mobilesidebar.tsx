import Image from "next/image";
import { cn } from "../../../lib/utils";
import React from "react";
import Link from "next/link";
import { AdminNavigations } from "../../../constants/adminSidebarNavigations";
export function SmallScreenSidebar() {
  return (
    <aside
      className={cn(
        "min-w-12 items-center h-full  md:flex flex-col justify-between sticky top-0 left-0 bg-bgColor-1 px-3 pt-5 transition-all duration-300"
      )}
    >
      <div className="w-full flex flex-col gap-9 ">
        <div className={cn("flex justify-center")}>
          <div className="flex items-center gap-1">
            <Image
              width={27}
              height={27}
              src={"/icons/main-logo.svg"}
              alt="Logo"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-1">
          <div
            className={cn(
              "w-full h-10  px-3 shadow-md  size-14  rounded-lg flex items-center justify-center"
            )}
          >
            <Image
              width={17}
              height={17}
              src="/icons/arrow-left-right.svg"
              alt="left right Arrow"
              className="cursor-pointer"
            />
          </div>
          <div
            className={cn(
              "rounded-sm  bg-bgColor-2 px-4 py-[2px] shadow-md space-y-2 flex items-center justify-center min-h-9 p-0 w-[60%]"
            )}
          >
            <div className={cn("w-full  flex items-center justify-center")}>
              <div className="flex gap-1 items-center ">
                <Image
                  width={18}
                  height={18}
                  src="/icons/globe.svg"
                  alt="glob"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "w-full flex flex-col gap-1 items-center justify-center p-2"
          )}
        >
          {AdminNavigations.map((nav) => (
            <Link
              href={nav.path}
              className={cn(
                "h-10 items-center flex gap-2 text-textcolor-1 font-medium rounded-md   w-10 px-0 justify-center ",
                { "bg-white shadow-md": nav.label == "Waitlist" }
              )}
              key={nav.id}
            >
              <Image width={20} height={20} src={nav.image} alt={nav.label} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-full flex-col justify-end">
        <div className="mb-2 flex w-full h-10 items-center px-4 justify-center">
          <div>
            <Image
              alt="dashboard"
              width={19}
              height={19}
              src={"/icons/go.svg"}
            />
          </div>
        </div>
        <div className="w-full h-16 flex items-center bg-white rounded-md px-3 shadow-md mb-3">
          <div className={cn("size-10 items-center flex justify-center")}>
            <Image
              src={"/image/ellips.png"}
              className="object-cover"
              alt="admin"
              height={30}
              width={30}
            />
          </div>
        </div>
        <div className="w-full min-h-14 flex  ">
          <div className="size-12 flex items-center justify-center">
            <Image
              src={"/icons/help-circle.svg"}
              alt="help"
              width={19}
              height={19}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
