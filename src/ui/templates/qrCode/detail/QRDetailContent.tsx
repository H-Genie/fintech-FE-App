import type { OrderInfoJwtRes } from '@type/responses/payment';

interface QRDetailCardProps {
  orderData?: OrderInfoJwtRes;
}
const QRDetailContent = ({ orderData }: QRDetailCardProps) => {
  return (
    <>
      <img src='/logo.png' className='w-16' alt='Logo' />
      <p className=' text-2xl font-medium'>결제를 하시겠습니까?</p>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center w-full'>
        <p className='text-gray-500'>상점</p>
        <p className='overflow-hidden text-ellipsis whitespace-nowrap max-w-[70%]'>
          {orderData?.merchant_name}
        </p>
      </div>

      <div role='separator' className='mb-4' />

      <div className='flex justify-between items-center w-full'>
        <p className='text-gray-500'>상품</p>
        <p
          className='overflow-hidden text-ellipsis whitespace-normal max-w-[70%] line-clamp-2'
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            maxWidth: '70%',
          }}
        >
          {orderData?.order_name}
        </p>
      </div>

      <div role='separator' className='mb-4' />

      <div className='flex justify-between items-center w-full'>
        <p className='text-gray-500'>가격</p>
        <p className='max-w-[70%] font-bold'>
          {Number(orderData?.amount).toLocaleString('ko')} KRW
        </p>
      </div>

      <div role='separator' className='mb-8' />

      <button className='w-[calc(100%-32px)] h-12 bg-[#18A0FB] text-white font-bold rounded-full'>
        결제하기
      </button>
      <button className='w-[calc(100%-32px)] h-12 text-[#18A0FB] font-bold rounded-full mt-4'>
        취소하기
      </button>
    </>
  );
};

export default QRDetailContent;
