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

const QRPage = lazy(() =>
  import('@pages/payment/qr').then((m) => ({ default: m.QRPage })),
);
const QRPaymentDetailPage = lazy(() =>
  import('@pages/payment/detail').then((m) => ({
    default: m.QRPaymentDetailPage,
  })),
);
const QRPaymentCompletePage = lazy(() =>
  import('@pages/payment/complete').then((m) => ({
    default: m.QRPaymentCompletePage,
  })),
);

const TransactionsPage = lazy(() =>
  import('@pages/transactions/list').then((m) => ({
    default: m.TransactionsListPage,
  })),
);
const TransactionDetailPage = lazy(() =>
  import('@pages/transactions/detail').then((m) => ({
    default: m.TransactionDetailPage,
  })),
);
const CardPage = lazy(() =>
  import('@pages/card/list').then((m) => ({ default: m.CardPage })),
);

const SuspendedLoginPage = withSuspense(LoginPage);
const SuspendedSignupPage = withSuspense(SignupPage);

const SuspendedQRPage = withSuspense(QRPage);
const SuspendedQRPaymentDetailPage = withSuspense(QRPaymentDetailPage);
const SuspendedQRPaymentCompletePage = withSuspense(QRPaymentCompletePage);

const SuspendedTransactionsPage = withSuspense(TransactionsPage);
const SuspendedTransactionDetailPage = withSuspense(TransactionDetailPage);
const SuspendedCardPage = withSuspense(CardPage);

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
        {
          path: ROUTES.PAYMENT.DETAIL,
          element: <SuspendedQRPaymentDetailPage />,
        },
        {
          path: ROUTES.PAYMENT.COMPLETE,
          element: <SuspendedQRPaymentCompletePage />,
        },
        {
          path: ROUTES.TRANSACTIONS.DETAIL,
          element: <SuspendedTransactionDetailPage />,
        },
      ],
    },

    // 네비게이션 있는 페이지들
    {
      element: <BottomNavLayout />,
      children: [
        { path: ROUTES.PAYMENT.QR, element: <SuspendedQRPage /> },
        {
          path: ROUTES.TRANSACTIONS.LIST,
          element: <SuspendedTransactionsPage />,
        },
        { path: ROUTES.CARD.LIST, element: <SuspendedCardPage /> },
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
