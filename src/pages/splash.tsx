import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className='h-screen m-0 flex flex-col justify-center items-center -mx-4 -my-8'
      style={{ background: 'linear-gradient(135deg, #89CFF0, #007BFF)' }}
    >
      <img src='/logo.png' alt='Logo' className='w-48' />
      <h2 className='text-5xl mt-8 font-black text-[#e1e1e1]'>PAY 200</h2>
    </div>
  );
};

export default SplashPage;
