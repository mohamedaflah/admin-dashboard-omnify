import Image from "next/image";

export const BigLogo = () => (
  <div className="flex items-center gap-1">
    <Image width={23} height={23} src={"/icons/main-logo.svg"} alt="Logo" />
    <div className="flex items-center gap-1 h-full">
      <h1 className="capitalize text-textcolor-3 font-extrabold text-[18px]">
        Front
      </h1>
      <div className="size-[5px] bg-textcolor-3 rounded-full" />
      <h1 className="capitalize text-textcolor-3 font-extrabold text-[18px]">
        Desk
      </h1>
    </div>
  </div>
);
