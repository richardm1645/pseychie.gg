import React from "react";
import PseychieLogo from "../../PseychieLogo.png"

export default function Analysis(props) {
  return (
    <div className="w-[30rem] p-4 shadow-lg rounded-lg border min-h-500px border-black">
      <div className="flex-row">
        <div className="flex items-start">
          <img src={PseychieLogo} alt="Pseychie" className="w-9 h-9 rounded-full shadow-lg"/>
          <span className="text-lg font-bold pl-2 flex content-center">{props.rating}</span>
        </div>
        <hr className="flex-1 border-t-2 mt-1 border-black rounded-lg" />
      </div>
    </div>
  )
}