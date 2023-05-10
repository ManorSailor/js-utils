import { useState } from 'react';

function App() {
  const [header, setHeader] = useState('Our First Test');

  return <h1 onClick={() => setHeader('Our Second Test')}>{header}</h1>;
}

export default App;
