import React from "react";

export default function DescPanel(props) {
  const iconLocation = `/icons/${props.icon}`;

  return (
    <div className="w-[30rem] p-4 shadow-lg rounded-lg border min-h-600 border-black">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={iconLocation} alt="Item Icon" className="w-10 drop-shadow-md shadow-black opacity-90" />
          <span className="text-lg font-bold pl-5">{props.name}</span>
        </div>
      </div>
      <hr className="flex-1 border-t-2 mt-1 border-black rounded-lg" />
      <p className="text-base pt-2">{props.desc}</p>
    </div>
  )
}