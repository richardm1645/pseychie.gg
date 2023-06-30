import React from "react";

export default function WikiButton(props) {
  return (
    <a
      href={props.link}
      target="blank"
      className="inline-block px-4 py-2 bg-gray-800 text-white transition-colors duration-300 ease-in-out hover:bg-slate-300 hover:text-gray-800"
    >
      Wiki Page
    </a>
  );
}