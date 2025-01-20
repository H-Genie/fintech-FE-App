import { ROUTES } from '@constants/routes';
import Button from '@ui/components/button/Button';
import PageLayout from '@ui/layouts/PageLayout';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: 퍼블리싱 단계에서 임시로 넘어가기 위한 로직
    if (email === 'admin@admin.com' && password === '1234') {
      navigate(`${ROUTES.PAYMENT.QR}`);
    }
  };

  return (
    <PageLayout className='flex flex-col items-center justify-center'>
      <img src='/logo.png' className='w-24' alt='Logo' />

      <form className='w-[356px] flex flex-col' onSubmit={onSubmit}>
        <div className='pt-16' />

        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#f6f6f6] border border-[#e8e8e8] outline-none h-12 rounded-md pl-4'
        />

        <div role='separator' className='pt-4' />

        <div className='relative'>
          <input
            type={isShow ? 'text' : 'password'}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#f6f6f6] border border-[#e8e8e8] outline-none h-12 rounded-md pl-4 w-full'
          />
          <span
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-[#18a0fb] cursor-pointer'
            onClick={() => setIsShow((prev) => !prev)}
          >
            {isShow ? 'Hide' : 'Show'}
          </span>
        </div>

        <div role='separator' className='pt-4' />

        <p className='text-center'>
          <Link to='/signup' className='hover:underline hover:text-blue-500'>
            아직 회원이 아닌가요?
          </Link>
        </p>

        <div role='separator' className='pt-4' />

        <Button
          size={'extraLarge'}
          disabled={email.length === 0 || password.length === 0}
          isPending={false}
          rounded
        >
          로그인
        </Button>
      </form>
    </PageLayout>
  );
};

export default LoginPage;
