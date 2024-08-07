import "../App.css";
import { SideBar } from "@/components/app-component/sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
  icons: "/icons/main-logo.svg",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="h-screen w-full flex relative  scrollbar-none bg-bgColor-1"
      id="ScrollArea"
    >
      {/* Side bar */}
      <SideBar />
      <section className="w-full  p-3  overflow-x-hidden">{children}</section>
    </main>
  );
}
