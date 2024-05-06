import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Landing from './components/Landing';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const [subject, setSubject] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  function handleOnAdd() {
    !showAdd && console.log('david');
    setShowAdd(!showAdd);
    // console.log(showAdd);
  }

  function handleAddSubmit(e) {
    console.log(e);
  }

  return (
    <div className='bg-[url("Assets/bg2.png")] bg-cover bg-center bg-no-repeat h-screen md:h-auto flex items-center justify-center '>
      {loading ? (
        <Loading />
      ) : (
        <Landing
          handleOnAdd={handleOnAdd}
          showAdd={showAdd}
          handleAddSubmit={handleAddSubmit}
        />
      )}
    </div>
  );
}

export default App;
