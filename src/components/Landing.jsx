import { motion } from 'framer-motion';
import SubjectsList from './SubjectsList';
import AddForm from './AddForm';

export default function Landing({
  handleShowAdd,
  showAdd,
  handleInputChange,
  newSubject,
  handleAddSubmit,
  subjectsList,
  handleRemoveSubject,
}) {
  return (
    <div className=' h-screen bg-cover flex items-start justify-center bg-center w-2/3 p-10'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='flex flex-col gap-9 justify-center items-center w-2/3'
      >
        <div className='flex justify-center items-start'>
          <p className='text-[#0D3B66] text-shadow text-7xl font-bold'>Grade</p>
          <p className='text-[#EE964B] text-shadow text-7xl font-bold'>Book</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <p className='text-[#EE964B] text-shadow-sm text-3xl font-bold'>
            Subjects
          </p>
        </div>
        <div className='items-center justify-center mt-40 flex flex-col w-full'>
          <SubjectsList
            list={subjectsList}
            handleRemoveSubject={handleRemoveSubject}
          />

          {showAdd && (
            <AddForm
              handleAddSubmit={handleAddSubmit}
              newSubject={newSubject}
              handleInputChange={handleInputChange}
            />
          )}
          <div className='flex flex-row gap-5'>
            {!showAdd ? (
              <button
                className='bg-[#0D3B66] text-[#F4D35E] rounded-lg px-4 py-2 font-bold shadow-md hover:shadow-lg'
                onClick={handleShowAdd}
              >
                Add subject
              </button>
            ) : (
              <button
                className='bg-[#F95738] text-[#F4D35E] rounded-lg px-4 py-2 font-bold shadow-md hover:shadow-lg'
                onClick={handleShowAdd}
              >
                Close
              </button>
            )}
            {subjectsList.length > 0 && (
              <button className='bg-[#EE964B] text-[#0D3B66] rounded-lg px-4 py-2 font-bold shadow-md hover:shadow-lg'>
                Remove All
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
