import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import ItemList from './components/ItemList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
  );
}

export default App;
