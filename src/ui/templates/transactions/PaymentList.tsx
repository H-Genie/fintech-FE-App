import { ROUTES } from '@constants/routes';
import { useHistoryList } from '@hooks/queries/usePayments';
import { converDateFormat, convertCurrencyFormat } from '@lib/util/locale';
import type { HistoryDTO } from '@type/api';
import ErrorComponent from '@ui/components/error/ErrorComponent';
import LoadingAnimation from '@ui/components/loading/LoadingAnimation';
import { useNavigate } from 'react-router-dom';

type HistoryResponse = {
  items: HistoryDTO[];
  totalCount: number;
};

const PaymentList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useHistoryList() as {
    data: HistoryResponse | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <ul>
      {data?.items.map((list) => (
        <li
          key={list.historyId}
          className='w-full h-16 border-b border-gray-200 flex justify-between items-center px-4 mb-4 cursor-pointer'
          onClick={() => navigate(ROUTES.TRANSACTIONS.DETAIL)}
        >
          <div>
            <p className='font-bold'>
              {convertCurrencyFormat(list.amount)} KRW
            </p>
            <p>{list.store}</p>
          </div>
          <div className='text-gray-400'>
            {converDateFormat(list.createdAt)}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PaymentList;
