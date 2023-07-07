import React from "react";

export default function DescPanel(props) {
  const iconLocation = `/icons/${props.icon}`;

  return (
    <div className="w-80 p-4 shadow-lg rounded-lg border min-h-500px border-black">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={iconLocation} alt="Item Icon" className="w-10 drop-shadow-md shadow-black opacity-90" />
          <span className="text-lg font-bold">{props.name}</span>
        </div>
      </div>
      <p className="text-base">{props.desc}</p>
    </div>
  )
}