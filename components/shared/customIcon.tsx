import { IconTypes } from "@/types";

export default function CustomIcon({
  iconName: CustomIcon,
  className = "",
  onClick,
}: IconTypes) {
  return <CustomIcon className={`size-5 ${className}`} onClick={onClick} />;
}
