import { HistoryPaymentStatus } from '@type/api';
import Icon from '@ui/components/icon/Icon';

const PaymentResultDisplay = ({
  data,
}: {
  data: HistoryPaymentStatus | undefined;
}) => {
  return (
    <>
      <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto'>
        {data === HistoryPaymentStatus.COMPLETE ? (
          <Icon name='CircleCheck' size={48} color='#23A26D' />
        ) : (
          <Icon name='CircleX' size={48} color='#f00' />
        )}
      </div>

      <p className='text-center mt-4'>
        {data === HistoryPaymentStatus.COMPLETE ? '결제 성공!' : '결제 취소'}
      </p>
    </>
  );
};

export default PaymentResultDisplay;
