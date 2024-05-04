import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className='bg-[url("Assets/bg.png")] h-screen bg-cover flex items-center justify-center bg-center loading-screen'>
      <motion.div
        initial={{ translateY: '100%', opacity: 0 }}
        animate={{ translateY: '0%', opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='flex justify-center  items-center'
      >
        <p className='text-[#0D3B66] text-shadow text-7xl font-bold'>Grade</p>
        <p className='text-[#EE964B] text-shadow text-7xl font-bold'>Book</p>
      </motion.div>
    </div>
  );
}
