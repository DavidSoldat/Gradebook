import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className=' h-screen bg-cover flex items-center justify-center bg-center '>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='flex justify-center  items-center'
      >
        <p className='text-[#0D3B66] text-shadow text-7xl font-bold'>Grade</p>
        <p className='text-[#EE964B] text-shadow text-7xl font-bold'>Book</p>
      </motion.div>
    </div>
  );
}
