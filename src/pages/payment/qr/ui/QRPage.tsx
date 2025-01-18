import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';
import PageLayout from '@shared/ui/PageLayout';
import { QRScanWidget } from '@widgets/QRWidget';
import { parseQueryString } from '../lib/parseQueryString';

export const QRPage = () => {
  const navigate = useNavigate();

  const handleScanSuccess = (resultUrl: string) => {
    const result = parseQueryString(resultUrl);
    navigate(`${ROUTES.PAYMENT.DETAIL}`, {
      state: {
        token: result.token,
        expiredAt: result.expiredAt,
      },
    });
  };

  return (
    <PageLayout
      hasNav
      className='relative h-full px-0 '
      style={{
        backgroundImage: `radial-gradient(
          circle at top right,
          rgba(60, 20, 136, 0.6) 0%,
          rgba(75, 71, 180, 0.6) 20%,
          rgba(95, 122, 199, 0.6) 40%,
          rgba(64, 134, 147, 0.6) 60%,
          rgba(30, 127, 132, 0.6) 80%,
          rgba(30, 127, 132, 0.6) 100%
        )`,
      }}
    >
      <QRScanWidget onScanSuccess={handleScanSuccess} />
    </PageLayout>
  );
};

export default QRPage;
