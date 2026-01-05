import React from "react";
import CustomIcon from "../shared/customIcon";

export default function TitleText({ title = "titile", icon }) {
  return (
    <div className=" flex items-center gap-3 text-primary">
      <h1 className="text-4xl font-black">{title}</h1>
      <CustomIcon iconName={icon} className=" size-8" />
    </div>
  );
}
