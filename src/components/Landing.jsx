import { motion } from 'framer-motion';
import AddForm from './AddForm';

export default function Landing({ handleOnAdd, showAdd, handleAddSubmit }) {
  return (
    <div className=' h-screen bg-cover flex items-start justify-center bg-center  p-10'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='flex flex-col gap-9 '
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
        <div className='items-center justify-center mt-40 flex flex-col'>
          {showAdd && <AddForm handleAddSubmit={handleAddSubmit} />}
          <button
            className='bg-[#0D3B66] text-[#F4D35E] hover:text-[#0D3B66] hover:bg-[#EE964B]  rounded-lg px-4 py-2 font-bold shadow-md hover:shadow-lg'
            onClick={handleOnAdd}
          >
            Add Subject
          </button>
        </div>
      </motion.div>
    </div>
  );
}
