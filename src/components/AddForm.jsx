export default function AddForm(handleAddSubmit) {
  return (
    <div className='pb-2'>
      <form className='shadow p-10 border-2 bg-gray-50 rounded-lg flex gap-3'>
        <div>
          <label className='mr-1 text-lg text-[#0D3B66] font-semibold'>
            Subject:
          </label>
          <input
            type='text'
            className='rounded-lg border p-1'
            id='subjectName'
            placeholder='E.g. Geography'
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
          />
        </div>
        <button
          type='submit'
          className='bg-[#0D3B66] text-[#F4D35E] rounded-lg px-2 font-semibold shadow-md hover:shadow-lg'
        >
          Add
        </button>
      </form>
    </div>
  );
}
