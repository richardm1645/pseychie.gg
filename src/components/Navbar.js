import React from "react"

export default function Navbar() {
  return (
    <nav className="bg-purple-800 py-4 px-8 flex items-center justify-between">
      <a href="/" className="text-white text-xl font-bold">
        Pseychie.GG
      </a>
      <ul className="space-x-4 flex">
        <li className="text-white hover:text-gray-300">
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