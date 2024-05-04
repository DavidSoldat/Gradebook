import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className='bg-[url("Assets/bg2.png")] h-screen bg-cover flex items-start justify-center bg-center p-10 landing-screen'>
      <motion.div
        initial={{ translateY: '100%', opacity: 0 }}
        animate={{ translateY: '0%', opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='flex flex-col gap-9'
      >
        <div className='flex justify-center items-start'>
          <p className='text-[#0D3B66] text-shadow text-7xl font-bold'>Grade</p>
          <p className='text-[#EE964B] text-shadow text-7xl font-bold'>Book</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-[#EE964B] text-shadow-sm text-3xl font-bold'>
            Subjects
          </p>
        </div>
      </motion.div>
    </div>
  );
}
