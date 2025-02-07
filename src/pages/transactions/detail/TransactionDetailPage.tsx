import { useTransactionDetail } from '@hooks/queries/usePayments';
import { convertCurrencyFormat } from '@lib/formatter';
import Button from '@ui/components/button/Button';
import ErrorComponent from '@ui/components/error/ErrorComponent';
import LoadingAnimation from '@ui/components/loading/LoadingAnimation';
import DetailRow from '@ui/components/transactionDetailPage/DetailRow';
import PaymentResultDisplay from '@ui/components/transactionDetailPage/PaymentResultDisplay';
import TaxRow from '@ui/components/transactionDetailPage/TaxRow';
import PageLayout from '@ui/layouts/PageLayout';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransactionDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const historyId = location.pathname.split('/').pop() || '';

  const { data, isLoading, isError } = useTransactionDetail(historyId);

  const taxValue = useMemo(() => {
    if (!data) {
      return { price: 0, tax: 0 };
    } else {
      const price = Math.round(data.amount / 1.1);
      const tax = Math.round(data.amount - price);
      return { price, tax };
    }
  }, [data]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (isError || !data) {
    return <ErrorComponent />;
  }

  return (
    <PageLayout hasNav className='flex flex-col justify-center py-8'>
      <div className='mt-8'>
        <PaymentResultDisplay data={data.paymentStatus} />

        <h2
          className={`text-center mt-4 font-bold text-3xl ${data.paymentStatus === 'COMPLETED' ? 'text-black' : 'text-red-500'}`}
        >
          {convertCurrencyFormat(data.amount)} KRW
        </h2>
      </div>
      <hr className='my-8 border-b border-gray-200 w-full' />
      <div>
        <DetailRow label='거래 번호' value={data.historyId} />
        <DetailRow
          label={data.paymentStatus === 'COMPLETED' ? '결제 일시' : '취소 일시'}
          value={
            data.paymentStatus === 'COMPLETED'
              ? data.createdAt
              : data.canceledAt
          }
        />
        <DetailRow
          label='카드 정보'
          value={`${data.cardInfo.cardCompany} (${data.cardInfo.cardNumber})`}
        />
        <DetailRow label='상점명' value={data.store} />
      </div>
      <hr className='mb-8 border-b-2 border-dashed border-gray-200 w-full' />
      <div>
        <TaxRow label='공급가액' value={taxValue.price} />

        <div role='separator' className='mb-8' />

        <TaxRow label='부가세' value={taxValue.tax} />
      </div>

      <Button
        size={'extraLarge'}
        width={'fit'}
        variant={'outline_primary'}
        rounded
        className='m-auto mt-8'
        onClick={() => navigate('/transactions')}
      >
        확인
      </Button>
    </PageLayout>
  );
};

export default TransactionDetailPage;
