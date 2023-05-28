import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';

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
      <Navbar />
      <div>
        <h1>Data from MongoDB</h1>
        <ul>
          {data.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
