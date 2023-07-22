import { BrowserRouter as Router, Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from "axios";

import Navbar from './DescNavbar';
import WikiButton from './WikiButton';
import ItemSynergies from './ItemSynergies';
import DescPanel from './DescPanel';
import SectionDivider from './SectionDivider';
import Analysis from './Analysis';

export default function ItemDescription() {

  //ID references the url of the item entry, not the actual ID. See App.js for details
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [synergies, setSynergies] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get(`http://localhost:5000/api/item/${id}`) // <--- Edit the API endpoint here
      .then(response => {
        setSynergies(response.data.synergies)
        setItem(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <main className='layout'>
      
      <div className="absolute top-0 left-0 h-screen bg-banner-left bg-no-repeat -z-50"></div>
      <div className="absolute top-0 right-0 h-screen bg-banner-right bg-no-repeat -z-50"></div>

      <div className='z-10'>
        <Navbar />
      </div>
      
      <div className="container mx-auto mt-20 max-w-[70%]">
        <SectionDivider sectionName="Overview" />

        <div className='flex justify-between'>
          <DescPanel 
            name={item.name} 
            desc={item.description}
            icon={item.icon}
          />
          <Analysis analysis={item.analysis} rating={item.rating}/>
        </div>
        

        <div className='pt-5'>
          <WikiButton link={item.wiki_page} text="Wiki Page" />
        </div>
        
        <SectionDivider sectionName="Synergies" />

        <div>
          {Object.keys(synergies).map((key) => (
            <ItemSynergies key={key} label={key} value={synergies[key]} desc={synergies[key].description} />
          ))}
        </div>
      </div>
    </main>
  )
}