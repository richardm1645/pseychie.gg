import React from 'react';

//Mock image data - Replace when importing database
import bb from "../assets/images/mock/Balanced_Blade_Icon.png"

export default function ItemPanel({ item }) { //Replace item with props when db connects
  return (
    <div className="w-full md:w-1/3 p-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 h-48">
          <div className="flex flex-col">
            <div className="flex justify-between mb-3">
              <div className='flex items-center'>
                <img src={bb} alt="Item Icon" className="w-8 h-8 mr-2" />
                <span className="text-l font-bold max-w-xs">NAME HERE</span>
              </div>             
              <span className="text-xl font-geologica font-bold">{item.grade}</span>
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
