import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <div style={{ margin: '50px 550px' }}>
      <div style={{ marginBottom: '50px', height: '100px', width: '500px' }}>
        Upload an image
      </div>
      <input
        placeholder="Enter Text"
        value={input}
        style={{ height: '50px', width: '200px' }}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default App;
