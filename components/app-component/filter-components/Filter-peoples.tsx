import Image from "next/image";
export function FilterPeoples() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 h-10 border rounded-lg px-2">
          <Image
            src={"/icons/search.svg"}
            height={16}
            width={16}
            alt="Search"
          />
          <input
            className="w-full h-full outline-none border-none text-sm "
            placeholder="Search Payer or attendee name"
          />
        </div>
      </div>
    </>
  );
}
