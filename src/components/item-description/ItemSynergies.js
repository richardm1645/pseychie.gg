import React, { useEffect, useState } from 'react';
import axios from "axios";
import WikiButton from './WikiButton';

export default function ItemSynergies(props) {

  console.log(props.synergy)
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get(`http://localhost:5000/api/item/${props.label}`) // <--- Edit the API endpoint here
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const iconLocation = `/icons/${item.icon}`;
  const itemRoute = `/item/${item.url}`;

  return (
    <div>
      <div className="w-full p-4 shadow-lg rounded-lg border min-h-[50px] border-black">
      <div className="flex align-middle justify-between">
        <div className='flex align-middle'>
          <img src={iconLocation} alt="Item Icon" className="w-10 drop-shadow-md shadow-black opacity-90" />
          <span className="text-lg font-bold pl-2 flex content-center">{item.name}</span>
          <p className="text-base flex content-center">{props.desc}</p>
        </div>
          <WikiButton link={itemRoute} text="Item Page"/>
        
        </div>
      </div>      
    </div>
  )
}