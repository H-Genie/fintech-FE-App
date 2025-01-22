import PageLayout from '@ui/layouts/PageLayout';
import QRDetailContent from '@ui/templates/qrCode/detail/QRDetailContent';
import { LoadingSpinner } from '@ui/components/loading/LoadingSpinner';
import Button from '@ui/components/button/Button';
import { useLocationState } from '@hooks/useLocationState';
// import { useEffect } from 'react';
// import { ROUTES } from '@constants/routes';
import { useOrderInfo } from '@hooks/queries/usePayments';

const QRPaymentDetailPage = () => {
  // const navigate = useNavigate();
  // const { openDialog, closeModal } = useModal();

  const { state } = useLocationState<{
    token: string;
    expiredAt: number;
  }>();

  const { token } = state;

  // useEffect(() => {
  //   if (isLoading) return;
  //   let errorMessage = '';

  //   if (!token) {
  //     errorMessage = 'QR 결제 정보가 없습니다.\n다시 시도해 주세요.';
  //   } else if (expiredAt && new Date().getTime() > Number(expiredAt)) {
  //     errorMessage = '만료된 QR 코드입니다.\n다시 시도해 주세요.';
  //   }
  //   if (errorMessage) {
  //     openDialog('alert', {
  //       title: '오류',
  //       description: errorMessage,
  //       confirm: () => {
  //         closeModal();
  //         navigate(`${ROUTES.PAYMENT.QR}`);
  //       },
  //     });
  //   }
  // }, [isLoading]);

  const {
    data: orderData,
    isLoading: orderLoading,
    isError: orderError,
    refetch: orderRefetch,
  } = useOrderInfo(token);

  return (
    <PageLayout className='bg-gradient-to-br from-[#3c1488] via-[#408693] to-[#1e7f84] w-full  flex justify-center items-center'>
      <div className='bg-white w-[320px] h-[600px] rounded-[1rem] flex flex-col justify-center items-center p-8'>
        <>
          {orderData && <QRDetailContent orderData={orderData} />}
          {orderLoading && <LoadingSpinner />}
          {orderError && (
            <>
              <div>에러가 발생했습니다</div>
              <div>주문 정보를 불러오는데 실패했습니다. </div>
              <div>다시 시도해 주세요.</div>
              <Button
                className='w-[calc(100%-32px)] h-12 text-[#18A0FB] font-bold rounded-full mt-4'
                isPending={orderLoading}
                onClick={() => orderRefetch()}
              >
                재시도 하기
              </Button>
            </>
          )}
        </>
      </div>
    </PageLayout>
  );
};

export default QRPaymentDetailPage;
