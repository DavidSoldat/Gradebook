import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Landing from './components/Landing';
import subjectList from './data';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const [subject, setSubject] = useState('');
  const [grades, setGrades] = useState([]);

  const [subjectsList, setSubjectsList] = useState(subjectList);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  function handleShowAdd() {
    setShowAdd(!showAdd);
  }

  function handleAddSubmit(e) {
    e.preventDefault();

    if (!grades || !subject) return;

    const id = crypto.randomUUID();
    const newSubject = {
      id,
      subject,
      grades: [],
    };
  }

  return (
    <div className='bg-[url("Assets/bg2.png")] bg-cover bg-center bg-no-repeat h-screen md:h-auto flex items-center justify-center '>
      {loading ? (
        <Loading />
      ) : (
        <Landing
          handleOnAdd={handleShowAdd}
          showAdd={showAdd}
          handleAddSubmit={handleAddSubmit}
          grades={grades}
          subject={subject}
          subjectsList={subjectsList}
          setSubjectsList={setSubjectsList}
        />
      )}
    </div>
  );
}

export default App;
