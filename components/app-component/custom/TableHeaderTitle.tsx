import Image from "next/image";
interface ChildProp {
  image: string;
  title: string;
}
export const TableHeaderTitle = ({ image, title }: ChildProp) => (
  <div className="flex gap-2 items-center">
    <Image src={image} alt="Calender" width={19} height={19} />
    <span>{title}</span>
  </div>
);
