import React from 'react';
import { Link } from 'react-router-dom';

//Props is deconstructed as the "item" object
export default function ItemPanel({ item }) {
  const iconLocation = `/icons/${item.icon}`;
  const itemRoute = `/item/${item.url}`;

  return (
    <div className="w-full md:w-1/3 p-6">
      <Link to={itemRoute}>         
        <div className="bg-white rounded-lg shadow hover:shadow-outline">
          <div className="p-4 h-48">
            <div className="flex flex-col">
              <div className="flex justify-between mb-3">
                <div className='flex propss-center'>
                  <div className="relative w-12 h-12 mr-4">
                    
                    {/* Conditionally renders the color group of the item */}
                    {item.color.includes("bs") && (
                      <img src='colors/BS.png' alt="Brutality-survival" className="max-w-10 drop-shadow-md" />
                    )}

                    {item.color.includes("b") && (
                      <img src='colors/B.png' alt="Brutality" className="max-w-10 drop-shadow-md" />
                    )}

                    
                                  
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
      </Link>
    </div>
  );
};
