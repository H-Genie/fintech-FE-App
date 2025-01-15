import { useNavigate } from 'react-router-dom';

const PaymentList = () => {
  const navigate = useNavigate();
  return (
    <li
      className='w-full h-16 border-b border-gray-200 flex justify-between items-center px-4 mb-4 cursor-pointer'
      onClick={() => navigate('/payment/detail')}
    >
      <div>
        <p className='font-bold'>23,000 KRW</p>
        <p>네네치킨</p>
      </div>
      <div className='text-gray-400'>1/1</div>
    </li>
  );
};

export default PaymentList;
