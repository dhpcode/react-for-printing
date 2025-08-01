import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Davron')
  const handleClick = () => {
    setName('Aziz');
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
