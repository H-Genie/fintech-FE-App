import PaymentList from './PaymentList';
import PageLayout from '@shared/ui/PageLayout';

const TransactionsListPage = () => {
  return (
    <PageLayout hasNav className='pt-6 pb-24'>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <PaymentList key={item} />
        ))}
      </ul>

      <button className='w-full h-12 bg-white text-[#18A0FB] border border-[#18A0FB] rounded-full font-bold'>
        더보기
      </button>
    </PageLayout>
  );
};

export default TransactionsListPage;
