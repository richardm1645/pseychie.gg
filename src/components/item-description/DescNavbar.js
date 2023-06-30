import React from "react"
import logo from "../../logo.png"

export default function Navbar() {
  return (
    <nav className="bg-purple-800 font-serif py-4 px-8 flex items-center justify-between z-50">
      <a href="/"><img src={logo} alt="Logo"  className="h-10 w-auto" /></a>
      <ul className="space-x-4 flex font-roboto">
        <li className="text-white hover:text-gray-300 font-roboto">
          <a href="https://www.youtube.com/channel/UCxKlNWMOFGR4vMErkKjELuA" target="BLANK">YouTube</a>
        </li>
        <li className="text-white hover:text-gray-300">
          <a href="https://discord.gg/S9vFuvqTHW">Discord</a>
        </li>
        <li className="text-white hover:text-gray-300"><a href="/about" target="BLANK">About</a></li>
        <li className="text-white hover:text-gray-300">Dark Mode</li>
      </ul>
    </nav>
  )
}