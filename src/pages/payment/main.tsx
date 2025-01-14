import { CircleUserRound } from 'lucide-react';
import PaymentList from './components/PaymentList';

const PaymentPage = () => {
  return (
    <div className='p-4 pb-24'>
      <div className='w-full h-12'>
        <div className='h-full flex justify-end items-center mr-4 cursor-pointer'>
          <CircleUserRound size={24} color='#6B7280' />
        </div>
      </div>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <PaymentList key={item} />
        ))}
      </ul>

      <button className='w-full h-12 bg-white text-[#18A0FB] border border-[#18A0FB] rounded-full font-bold'>
        더보기
      </button>
    </div>
  );
};

export default PaymentPage;
