import PageLayout from '@shared/ui/PageLayout';

const QRPage = () => {
  return (
    <PageLayout
      hasNav
      className='bg-gradient-to-br from-[#3c1488] via-[#408693] to-[#1e7f84] h-full flex justify-center items-center px-0'
      style={{
        backgroundImage:
          'linear-gradient(161deg, rgba(60,20,136,1) 0%, rgba(64,134,147,1) 79%, rgba(30,127,132,1) 100%)',
      }}
    >
      <div className='w-[50%] aspect-square bg-white opacity-50'></div>
    </PageLayout>
  );
};

export default QRPage;
