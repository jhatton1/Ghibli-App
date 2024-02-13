import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <header>
        This is the header
      </header> */}
      <main>
        <img
          src="https://cdna.artstation.com/p/assets/images/images/011/730/348/large/anato-finnstark-howl-s-moving-castle-by-anatofinnstark-dcgoytl.jpg?1531119675"
          alt="howl's-moving-castle-background-img"
          className='bg-image'
        />
        <Dashboard/>
      </main>
      
    </div>
  );
}

export default App;
