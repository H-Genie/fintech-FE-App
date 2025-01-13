import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <img src='/logo.png' className='w-24' alt='Logo' />
      <form className='w-[356px] flex flex-col' onSubmit={onSubmit}>
        <div className='pt-16' />
        <input
          placeholder='Email'
          className='bg-[#f6f6f6] border border-[#e8e8e8] outline-none h-12 rounded-[0.5rem] pl-4'
        />
        <div className='pt-4' />
        <input
          type='password'
          placeholder='Password'
          className='bg-[#f6f6f6] border border-[#e8e8e8] outline-none h-12 rounded-[0.5rem] pl-4'
        />
        <div className='pt-4' />
        <p className='text-center'>
          <Link
            to='/app/signup'
            className='hover:underline hover:text-blue-500'
          >
            아직 회원이 아닌가요?
          </Link>
        </p>
        <div className='pt-16' />
        <button
          type='submit'
          className='h-12 bg-[#5DB075] border-none rounded-full text-white font-bold'
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
