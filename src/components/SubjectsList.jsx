export default function SubjectsList({ list }) {
  return (
    <ul className='bg-red-300 w-full mb-7'>
      {list.map((sub) => (
        <Subject key={sub.id} sub={sub} />
      ))}
    </ul>
  );
}

function Subject({ sub }) {
  const grades = sub.grades.join(', ');
  const average = sub.grades.reduce((acc, n) => acc + n, 0) / sub.grades.length;

  return (
    <li className='grid grid-rows-1 grid-cols-4'>
      <p>{sub.subject}</p>
      <p>{grades}</p>
      <p>{Math.round(average)}</p>
      <button>❌</button>
    </li>
  );
}
