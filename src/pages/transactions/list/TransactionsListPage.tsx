import PaymentList from '@ui/templates/transactions/PaymentList';
import PageLayout from '@ui/layouts/PageLayout';

const TransactionsListPage = () => {
  return (
    <PageLayout hasNav className='pt-6 pb-24'>
      <PaymentList />

      <button className='w-full h-12 bg-white text-[#18A0FB] border border-[#18A0FB] rounded-full font-bold'>
        더보기
      </button>
    </PageLayout>
  );
};

export default TransactionsListPage;
