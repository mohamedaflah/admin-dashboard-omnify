"use client";
import { AdminNavigations } from "@/constants/adminSidebarNavigations";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { SmallScreenSidebar } from "./Mobilesidebar";
export const SideBar = () => {
  const [expandSidebar, setExpandSidebar] = useState<boolean>(true);
  return (
    <>
      <aside className="md:hidden h-screen">
        <SmallScreenSidebar />
      </aside>

      <aside
        className={cn(
          "hidden  md:flex flex-col justify-between min-w-64 sticky top-0 left-0 bg-bgColor-1 px-3 pt-5 transition-all duration-300",
          {
            "min-w-20 items-center": !expandSidebar,
          }
        )}
      >
        <div className="w-full flex flex-col gap-9">
          <div
            className={cn("flex justify-between ", {
              "justify-center": !expandSidebar,
            })}
          >
            <div className="flex items-center gap-1">
              <Image
                width={expandSidebar ? 23 : 27}
                height={expandSidebar ? 23 : 27}
                src={"/icons/main-logo.svg"}
                alt="Logo"
              />
              {expandSidebar && (
                <>
                  <div className="flex items-center gap-1 h-full">
                    <h1 className="capitalize text-textcolor-3 font-extrabold text-[18px]">
                      Front
                    </h1>
                    <div className="size-[5px] bg-textcolor-3 rounded-full" />
                    <h1 className="capitalize text-textcolor-3 font-extrabold text-[18px]">
                      Desk
                    </h1>
                  </div>
                </>
              )}
            </div>

            {expandSidebar && (
              <Image
                src={"/icons/collaps-icon.svg"}
                width={20}
                height={20}
                alt="Collaps"
              />
            )}
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <div
              className={cn(
                "w-full h-10 flex items-center px-3 shadow-md rounded-xl justify-between",
                {
                  "size-14  rounded-lg flex items-center justify-center ":
                    !expandSidebar,
                }
              )}
            >
              {expandSidebar && (
                <>
                  <span className="capitalize text-textcolor-1 text-[15px] font-medium">
                    Location name
                  </span>
                </>
              )}
              <Image
                width={17}
                height={17}
                src="/icons/arrow-left-right.svg"
                alt="left right Arrow"
                className="cursor-pointer"
                onClick={() => setExpandSidebar(!expandSidebar)}
              />
            </div>
            <div
              className={cn(
                "rounded-sm w-[90%] bg-bgColor-2 min-h-16 px-4 py-[2px] shadow-md space-y-2",
                {
                  "flex items-center justify-center min-h-9 p-0 w-[60%]":
                    !expandSidebar,
                }
              )}
            >
              {expandSidebar && (
                <>
                  <div className="w-full flex items-center gap-2">
                    <h1 className="font-bold text-textcolor-1 text-[19px] tracking-tighter">
                      08:30 AM
                    </h1>
                    <h2 className="text-textcolor-1 font-semibold text-[15px] tracking-tighter capitalize">
                      Tue 20 jan
                    </h2>
                  </div>
                </>
              )}
              <div
                className={cn("w-full flex justify-between items-center", {
                  "flex items-center justify-center": !expandSidebar,
                })}
              >
                <div className="flex gap-1 items-center ">
                  <Image
                    width={18}
                    height={18}
                    src="/icons/globe.svg"
                    alt="glob"
                  />
                  {expandSidebar && (
                    <>
                      <span className="text-[13px]">UTC: +5 hours</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn("w-full flex flex-col gap-1", {
              "items-center justify-center p-2": !expandSidebar,
            })}
          >
            {AdminNavigations.map((nav) => (
              <Link
                href={nav.path}
                className={cn(
                  "h-10 items-center flex gap-2 text-textcolor-1 font-medium rounded-md px-3 ",
                  { "bg-white shadow-md": nav.label == "Waitlist" },
                  { "w-10 px-0 flex justify-center": !expandSidebar }
                )}
                key={nav.id}
              >
                <Image width={20} height={20} src={nav.image} alt={nav.label} />
                {expandSidebar && (
                  <>
                    <span>{nav.label}</span>
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full ">
          <div className="mb-2 flex w-full h-10 items-center px-4 justify-center">
            {expandSidebar && (
              <div className="h-full flex gap-2 items-center w-full">
                <Image
                  alt="dashboard"
                  width={19}
                  height={19}
                  src={"/icons/layout-dashboard.svg"}
                />
                <span>Dashboard</span>
              </div>
            )}
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
            <div
              className={cn("size-10 items-center flex", {
                "justify-center": !expandSidebar,
              })}
            >
              <Image
                src={"/image/ellips.png"}
                className="object-cover"
                alt="admin"
                height={30}
                width={30}
              />
            </div>
            {expandSidebar && (
              <>
                <div className="flex flex-col">
                  <h1 className="font-medium">Admin name</h1>
                  <span className="text-sm text-textcolor-2">
                    admin@gmail.com
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="w-full min-h-14 flex ">
            <div className="size-12 flex items-center justify-center">
              <Image
                src={"/icons/help-circle.svg"}
                alt="help"
                width={19}
                height={19}
              />
            </div>
            {expandSidebar && (
              <div className="h-full flex flex-col justify-center">
                <span className="text-sm">Help center</span>
                <span className="text-[12px] text-textcolor-2">
                  @2024 Omnify.Inc.{" "}
                </span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
