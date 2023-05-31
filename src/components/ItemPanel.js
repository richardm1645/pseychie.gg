import React from 'react';

export default function ItemPanel({ item }) { //Replace item with props when db connects
  return (
    <div className="w-full md:w-1/3 p-7">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img src={item.icon} alt="Item Icon" className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">{item.grade}</span>
            </div>
          </div>
          <p className="text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
