const QRPaymentDetailPage = () => {
  return (
    <div
      className='bg-gradient-to-br from-[#3c1488] via-[#408693] to-[#1e7f84] w-full h-screen flex justify-center items-center'
      style={{
        margin: '-32px -16px',
        width: 'calc(100% + 32px)',
      }}
    >
      <div className='bg-white w-[320px] h-[600px] rounded-[1rem] flex flex-col justify-center items-center'>
        <img src='/logo.png' className='w-24' alt='Logo' />
        <p className='mt-8 text-2xl font-medium'>결제를 하시겠습니까?</p>

        <div role='separator' className='mb-8' />

        <div className='flex justify-between items-center px-8 w-full'>
          <p className='text-gray-500'>상점</p>
          <p className='overflow-hidden text-ellipsis whitespace-nowrap max-w-[70%]'>
            (주)쿠팡(주)쿠팡(주)쿠팡(주)쿠팡(주)쿠팡(주)쿠팡(주)쿠팡
          </p>
        </div>

        <div role='separator' className='mb-4' />

        <div className='flex justify-between items-center px-8 w-full'>
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
            iPhone 16 Pro 128GB Natural Titanum iPhone 16 Pro 128GB Natural
            Titanum
          </p>
        </div>

        <div role='separator' className='mb-4' />

        <div className='flex justify-between items-center px-8 w-full'>
          <p className='text-gray-500'>가격</p>
          <p className='max-w-[70%] font-bold'>
            {Number(1200000).toLocaleString('ko')} KRW
          </p>
        </div>

        <div role='separator' className='mb-8' />

        <button className='w-[calc(100%-32px)] h-12 bg-[#18A0FB] text-white font-bold rounded-full'>
          결제하기
        </button>
        <button className='w-[calc(100%-32px)] h-12 text-[#18A0FB] font-bold rounded-full mt-4'>
          취소하기
        </button>
      </div>
    </div>
  );
};

export default QRPaymentDetailPage;
