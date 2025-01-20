import { ROUTES } from '@constants/routes';
import { useQueryParams } from '@hooks/useQueryParams';
import { useOrderInfo } from '@hooks/queries/usePayments';
import useModal from '@hooks/useModal';
import PageLayout from '@ui/layouts/PageLayout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QRPaymentDetailPage = () => {
  const navigate = useNavigate();
  const { openDialog, closeModal } = useModal();
  const { params, isLoading } = useQueryParams();
  const { token, expiredAt } = params;

  useEffect(() => {
    if (isLoading) return;

    let errorMessage = '';

    if (!token) {
      errorMessage = 'QR 결제 정보가 없습니다.\n다시 시도해 주세요.';
    } else if (expiredAt && new Date().getTime() > Number(expiredAt)) {
      errorMessage = '만료된 QR 코드입니다.\n다시 시도해 주세요.';
    }

    if (errorMessage) {
      openDialog('alert', {
        title: '오류',
        description: errorMessage,
        confirm: () => {
          closeModal();
          navigate(`${ROUTES.PAYMENT.QR}`);
        },
      });
    }
  }, [isLoading]);

  const {
    data: orderData,
    isLoading: orderLoading,
    isError: orderError,
  } = useOrderInfo(token || '');

  useEffect(() => {
    if (orderError) {
      openDialog('alert', {
        title: '오류',
        description:
          '주문 정보를 불러오는데 실패했습니다.\n다시 시도해 주세요.',
        confirm: () => {
          closeModal();
          navigate(`${ROUTES.PAYMENT.QR}`);
        },
      });
    }
  }, [orderError, openDialog, closeModal, navigate]);

  if (orderLoading) return <div>주문 정보 로딩 중...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <PageLayout className='bg-gradient-to-br from-[#3c1488] via-[#408693] to-[#1e7f84] w-full  flex justify-center items-center'>
      <div className='bg-white w-[320px] h-[600px] rounded-[1rem] flex flex-col justify-center items-center'>
        <img src='/logo.png' className='w-24' alt='Logo' />
        <p className='mt-8 text-2xl font-medium'>결제를 하시겠습니까?</p>

        <div role='separator' className='mb-8' />

        <div className='flex justify-between items-center px-8 w-full'>
          <p className='text-gray-500'>상점</p>
          <p className='overflow-hidden text-ellipsis whitespace-nowrap max-w-[70%]'>
            {orderData?.store}
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
            {orderData?.orderName}
          </p>
        </div>

        <div role='separator' className='mb-4' />

        <div className='flex justify-between items-center px-8 w-full'>
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
      </div>
    </PageLayout>
  );
};

export default QRPaymentDetailPage;
