import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Landing from './components/Landing';
import subjectList from './data';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const [newSubject, setNewSubject] = useState({
    id: 0,
    subject: '',
    grades: '',
  });

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

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewSubject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleAddSubmit(e) {
    e.preventDefault();

    const newSubjectWithGrades = {
      ...newSubject,
      grades: newSubject.grades
        .split(',')
        .map((grade) => parseInt(grade.trim())),
      id: uuidv4(),
    };

    setSubjectsList((prevList) => [...prevList, newSubjectWithGrades]);
    setNewSubject({
      subject: '',
      grades: '',
    });

    setShowAdd(!showAdd);
  }

  function handleRemoveSubject(id) {
    setSubjectsList((prevList) =>
      prevList.filter((subject) => subject.id !== id)
    );
  }

  return (
    <div className='bg-[url("Assets/bg2.png")] bg-cover bg-center bg-no-repeat h-screen md:h-auto flex items-center justify-center '>
      {loading ? (
        <Loading />
      ) : (
        <Landing
          handleShowAdd={handleShowAdd}
          showAdd={showAdd}
          handleInputChange={handleInputChange}
          newSubject={newSubject}
          handleAddSubmit={handleAddSubmit}
          subjectsList={subjectsList}
          handleRemoveSubject={handleRemoveSubject}
        />
      )}
    </div>
  );
}

export default App;
