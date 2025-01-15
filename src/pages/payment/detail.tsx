import { CircleCheck, CircleX } from 'lucide-react';
import { useMemo } from 'react';

type PaymentStatus = 'success' | 'canceled';

export const PaymentDetailPage = () => {
  // TODO: 퍼블리싱 단계에서 결제/취소 구분할려고 만든 값이므로 API 연결하면 수정하세요
  const status = useMemo<PaymentStatus>(() => 'canceled', []);

  return (
    <div className='w-full h-[calc(100vh-64px)] px-4 flex flex-col justify-center'>
      {/* status Icon */}
      <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto'>
        {status === 'success' ? (
          <CircleCheck size={48} color='#23A26D' />
        ) : (
          <CircleX size={48} color='#f00' />
        )}
      </div>

      {/* status Message */}
      <p className='text-center mt-4'>
        {status === 'success' ? '결제 성공!' : '결제 취소'}
      </p>

      {/* Amount */}
      <h2
        className={`text-center mt-4 font-bold text-3xl ${status === 'success' ? 'text-black' : 'text-red-500'}`}
      >
        {Number(55000).toLocaleString('ko')} KRW
      </h2>

      <hr className='my-8 border-b border-gray-200 w-full' />

      {/* Payment Details */}
      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>거래 번호</p>
        <p>123456789</p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>
          {status === 'success' ? '결제 일시' : '취소 일시'}
        </p>
        <p>2025-01-01 12:31:59</p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>카드번호</p>
        <p>1234-5678-1234-5678</p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>상점명</p>
        <p>롯데백화점 명동점</p>
      </div>

      <hr className='my-8 border-b-2 border-dashed border-gray-200 w-full' />

      {/* Amount Details */}
      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500 text-2xl'>금액</p>
        <p className='text-2xl font-bold'>
          {Number(50000).toLocaleString('ko')} KRW
        </p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500 text-2xl'>부가세</p>
        <p className='text-2xl font-bold'>
          {Number(5000).toLocaleString('ko')} KRW
        </p>
      </div>
    </div>
  );
};

export default PaymentDetailPage;
