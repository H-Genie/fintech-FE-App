import { CircleUserRound } from 'lucide-react';

const PaymentList = () => {
  return (
    <li
      style={{
        width: '100%',
        height: 60,
        borderBottom: '1px solid #e8e8e8',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        marginBottom: 16,
      }}
    >
      <div>
        <p>23,000 KRW</p>
        <p>네네치킨</p>
      </div>
      <div>1/1</div>
    </li>
  );
};

const PaymentPage = () => {
  return (
    <div
      style={{ margin: '0 auto', width: '100%', maxWidth: 390, padding: 16 }}
    >
      <div style={{ width: '100%', height: 48 }}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: 16,
          }}
        >
          <CircleUserRound size={24} color='#6B7280' />
        </div>
      </div>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <PaymentList key={item} />
        ))}
      </ul>
    </div>
  );
};

export default PaymentPage;
