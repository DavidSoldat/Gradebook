export default function AddForm({
  handleAddSubmit,
  handleInputChange,
  newSubject,
}) {
  return (
    <div className='pb-2'>
      <form
        className='shadow p-10 border-2 bg-gray-50 rounded-lg flex gap-3'
        onSubmit={handleAddSubmit}
      >
        <div>
          <label className='mr-1 text-lg text-[#0D3B66] font-semibold'>
            Subject:
          </label>
          <input
            type='text'
            className='rounded-lg border p-1'
            name='subject'
            placeholder='E.g. Geography'
            value={newSubject.subject}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='mr-1 text-lg text-[#0D3B66] font-semibold'>
            Grades:
          </label>
          <input
            type='text'
            className='rounded-lg border p-1'
            placeholder='E.g. 4,2,4'
            name='grades'
            value={newSubject.grades}
            onChange={handleInputChange}
          />
        </div>
        <button className='bg-[#0D3B66] text-[#F4D35E] rounded-lg px-4 font-semibold shadow-md hover:shadow-lg'>
          Add
        </button>
      </form>
    </div>
  );
}
