import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call backend /health endpoint
    axios.get('http://localhost:8000/health')
      .then(res => {
        console.log('Backend response:', res.data);
        setHealth(res.data);
      })
      .catch(err => {
        console.error('Error calling backend:', err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Deal Communication Intelligence System</h1>
      
      {error && (
        <p style={{ color: 'red' }}>
          Error: {error}
        </p>
      )}
      
      {health && (
        <p style={{ color: 'green' }}>
          ✓ Backend is healthy: {JSON.stringify(health)}
        </p>
      )}
      
      {!health && !error && (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;