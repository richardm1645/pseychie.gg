import React from 'react';


export default function ItemPanel({ item }) { //Replace item with props when db connects
  const iconLocation = `/icons/${item.icon}`

  return (
    <div className="w-full md:w-1/3 p-6">
      <div className="bg-white rounded-lg shadow hover:shadow-outline">
        <div className="p-4 h-48">
          <div className="flex flex-col">
            <div className="flex justify-between mb-3">
              <div className='flex items-center'>
                <div className="relative w-12 h-12 mr-4"> 
                  <img src='colors/BS.png' alt="My Image" className="max-w-10 drop-shadow-md" />               
                  <img src={iconLocation} alt="Item Icon" className="absolute top-1 left-1 w-10 drop-shadow-md shadow-black opacity-90" />              
                </div>
                <span className="text-l font-bold max-w-xs">{item.name}</span>
              </div>             
              <span className="text-xl font-geologica font-bold">{item.rating}</span>
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
