import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Landing from './components/Landing';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <Loading /> : <Landing />}</div>;
}

export default App;
