import React from 'react';

import Navbar from './Navbar';
import ItemList from './ItemList';

export default function Home() {
  return (
    <main className='layout'>
      
      <div className="absolute top-0 left-0 h-screen bg-banner-left bg-no-repeat -z-50"></div>
      <div className="absolute top-0 right-0 h-screen bg-banner-right bg-no-repeat -z-50"></div>

      <div className='z-10'>
        <Navbar />
      </div>
      
      
      <div className="container mx-auto mt-20 max-w-[80%]">
        <ItemList />
      </div>
    </main>
  )
}