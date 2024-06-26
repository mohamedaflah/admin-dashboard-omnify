import Image from "next/image";

export function TableActionButtons() {
  return (
    <div className="h-full  items-center gap-8 hidden md:flex">
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
    </div>
  );
}
