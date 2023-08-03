import React from "react";

export default function SectionDivider(props) {
  return (
    <div className="flex pt-10 pb-5 items-center">
      <h4 className="font-bold font-roboto text-3xl mr-4">{props.sectionName}</h4>
      <hr className="flex-1 border-t-4 mt-1 border-black rounded-lg" />
    </div>
  )
}