export default function SubjectsList({ list, handleRemoveSubject }) {
  return (
    <ul className='w-full mb-7'>
      {list.map((sub) => (
        <Subject
          key={sub.id}
          sub={sub}
          handleRemoveSubject={handleRemoveSubject}
        />
      ))}
    </ul>
  );
}

function Subject({ sub, handleRemoveSubject }) {
  const grades = sub.grades.join(', ');
  const average = sub.grades.reduce((acc, n) => acc + n, 0) / sub.grades.length;

  return (
    <li className='grid grid-rows-1 grid-cols-4 shadow-md py-2 rounded-lg pl-2'>
      <p className='text-[#EE964B] text-2xl font-semibold text-shadow-sm'>
        {sub.subject}
      </p>
      <p className='text-[#0D3B66] text-2xl font-semibold text-center text-shadow-sm'>
        {grades}
      </p>
      <p className='text-[#EE964B] text-2xl text-center font-semibold text-shadow-sm'>
        {Math.round(average)}
      </p>
      <button
        onClick={() => handleRemoveSubject(sub.id)}
        id={sub.id}
        className='text-shadow-sm'
      >
        ❌
      </button>
    </li>
  );
}
