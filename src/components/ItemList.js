import React, { useEffect, useState } from 'react';

import ItemPanel from "./ItemPanel";
import axios from "axios";


export default function ItemList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost:5000/api/data') // <--- Edit the API endpoint here
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap -mx-4">
        {data.map((item) => (
          <ItemPanel key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

