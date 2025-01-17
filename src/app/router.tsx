import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { DefaultLayout } from './layouts/default-layout';
import { BottomNavLayout } from './layouts/bottom-nav-layout';
import { withSuspense } from './providers/with-suspense';
import { ROUTES } from '@shared/config/routes';
import SplashPage from '@pages/splash';
import ModalUITest from '@pages/test/ModalUITest';
import ApiHookTest from '@pages/test/ApiHookTest';
import ButtonSample from '@pages/test/ButtonSample';

// Lazy load pages
const LoginPage = lazy(() =>
  import('@pages/auth/login').then((m) => ({ default: m.default })),
);
const SignupPage = lazy(() =>
  import('@pages/auth/signup').then((m) => ({ default: m.default })),
);
const PaymentPage = lazy(() =>
  import('@pages/payment/main').then((m) => ({ default: m.default })),
);
const PaymentDetailPage = lazy(() =>
  import('@pages/payment/detail').then((m) => ({ default: m.default })),
);
const QRPage = lazy(() =>
  import('@pages/qr/main').then((m) => ({ default: m.default })),
);
const CardPage = lazy(() =>
  import('@pages/card/main').then((m) => ({ default: m.default })),
);
const QRScanPage = lazy(() =>
  import('@pages/qr/scan').then((m) => ({ default: m.default })),
);
const QRPaymentDetailPage = lazy(() =>
  import('@pages/qr/payment/detail').then((m) => ({ default: m.default })),
);
const QRPaymentCompletePage = lazy(() =>
  import('@pages/qr/payment/complete').then((m) => ({ default: m.default })),
);

const SuspendedLoginPage = withSuspense(LoginPage);
const SuspendedSignupPage = withSuspense(SignupPage);
const SuspendedQRPage = withSuspense(QRPage);
const SuspendedPaymentPage = withSuspense(PaymentPage);
const SuspendedPaymentDetailPage = withSuspense(PaymentDetailPage);
const SuspendedCardPage = withSuspense(CardPage);
const SuspendedQRScanPage = withSuspense(QRScanPage);
const SuspendedQRPaymentDetailPage = withSuspense(QRPaymentDetailPage);
const SuspendedQRPaymentCompletePage = withSuspense(QRPaymentCompletePage);

// 라우트 설정
const routes = {
  path: '/',
  children: [
    // 네비게이션 없는 페이지들
    {
      element: <DefaultLayout />,
      children: [
        { index: true, element: <SplashPage /> },
        { path: ROUTES.LOGIN, element: <SuspendedLoginPage /> },
        { path: ROUTES.SIGNUP, element: <SuspendedSignupPage /> },
        { path: ROUTES.QR.SCAN, element: <SuspendedQRScanPage /> },
        { path: ROUTES.QR.DETAIL, element: <SuspendedQRPaymentDetailPage /> },
        {
          path: ROUTES.QR.COMPLETE,
          element: <SuspendedQRPaymentCompletePage />,
        },
      ],
    },

    // 네비게이션 있는 페이지들
    {
      element: <BottomNavLayout />,
      children: [
        { path: ROUTES.PAYMENT.MAIN, element: <SuspendedPaymentPage /> },
        {
          path: ROUTES.PAYMENT.DETAIL,
          element: <SuspendedPaymentDetailPage />,
        },
        { path: ROUTES.QR.MAIN, element: <SuspendedQRPage /> },
        { path: ROUTES.CARD.MAIN, element: <SuspendedCardPage /> },
      ],
    },
    {
      path: '/modal-test',
      element: <ModalUITest />,
    },
    {
      path: '/button-test',
      element: <ButtonSample />,
    },
    {
      path: '/api-hook-test',
      element: <ApiHookTest />,
    },
  ],
};

export const router = createBrowserRouter([routes]);
