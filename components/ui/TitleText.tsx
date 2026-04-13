import CustomIcon from "../shared/CustomIcon";
import { TitleTextProps } from "@/types/component.types";


export default function TitleText({ title = "titile", icon }: TitleTextProps) {
  return (
    <div className=" flex items-center gap-3 text-primary">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-black font-satoshi">{title}</h1>
      <CustomIcon iconName={icon} className=" size-8" />
    </div>
  );
}
