import React from 'react';
import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className='container'>
      <Stars count={5}/>
    </div>
  )
}

export default App;
