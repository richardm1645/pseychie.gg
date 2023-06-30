import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function ItemSynergies(props) {

  console.log(props.synergy)
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get(`http://localhost:5000/api/item/${props.synergy}`) // <--- Edit the API endpoint here
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {item.name}
    </div>
  )
}