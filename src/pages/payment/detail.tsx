import { CircleCheck } from 'lucide-react';

export const PaymentDetailPage = () => {
  return (
    <div style={{ margin: '0 auto', width: '100%' }}>
      <div
        style={{
          width: 96,
          height: 96,
          backgroundColor: '#eee',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <CircleCheck size={48} color='#23A26D' />
      </div>

      <p style={{ textAlign: 'center', marginTop: 16 }}>Payment Success!</p>

      <h2
        style={{
          textAlign: 'center',
          marginTop: 16,
          fontWeight: 700,
          fontSize: 48,
        }}
      >
        55,000 KRW
      </h2>
    </div>
  );
};

export default PaymentDetailPage;
