import { useHistoryDetail } from '@hooks/queries/usePayments';
import { convertCurrencyFormat } from '@lib/util/locale';
import { HistoryPaymentStatus } from '@type/api';
import ErrorComponent from '@ui/components/error/ErrorComponent';
import Icon from '@ui/components/icon/Icon';
import LoadingAnimation from '@ui/components/loading/LoadingAnimation';
import PageLayout from '@ui/layouts/PageLayout';
import { useMemo } from 'react';

const TransactionDetailPage = () => {
  const { data, isLoading, isError } = useHistoryDetail('history-123');
  console.log(data);

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

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <PageLayout hasNav className='flex flex-col justify-center'>
      {/* status Icon */}
      <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto'>
        {data?.paymentStatus === HistoryPaymentStatus.COMPLETE ? (
          <Icon name='CircleCheck' size={48} color='#23A26D' />
        ) : (
          <Icon name='CircleX' size={48} color='#f00' />
        )}
      </div>

      {/* status Message */}
      <p className='text-center mt-4'>
        {data?.paymentStatus === HistoryPaymentStatus.COMPLETE
          ? '결제 성공!'
          : '결제 취소'}
      </p>

      {/* Amount */}
      <h2
        className={`text-center mt-4 font-bold text-3xl ${data?.paymentStatus === HistoryPaymentStatus.COMPLETE ? 'text-black' : 'text-red-500'}`}
      >
        {convertCurrencyFormat(data?.amount ?? 0)} KRW
      </h2>

      <hr className='my-8 border-b border-gray-200 w-full' />

      {/* Payment Details */}
      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>거래 번호</p>
        <p>{data?.historyId}</p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>
          {data?.paymentStatus === HistoryPaymentStatus.COMPLETE
            ? '결제 일시'
            : '취소 일시'}
        </p>
        <p>
          {data?.paymentStatus === HistoryPaymentStatus.COMPLETE
            ? data.createdAt
            : data?.canceledAt}
        </p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>카드번호</p>
        <p>{data?.cardInfo.cardNumber}</p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500'>상점명</p>
        <p>{data?.store}</p>
      </div>

      <hr className='my-8 border-b-2 border-dashed border-gray-200 w-full' />

      {/* Amount Details */}
      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500 text-2xl'>금액</p>
        <p className='text-2xl font-bold'>
          {convertCurrencyFormat(taxValue.price)} KRW
        </p>
      </div>

      <div role='separator' className='mb-8' />

      <div className='flex justify-between items-center px-4'>
        <p className='text-gray-500 text-2xl'>부가세</p>
        <p className='text-2xl font-bold'>
          {convertCurrencyFormat(taxValue.tax)} KRW
        </p>
      </div>
    </PageLayout>
  );
};

export default TransactionDetailPage;
