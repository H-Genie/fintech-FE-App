export const ROUTES = {
  SPLASH: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PAYMENT: {
    QR: '/payment/qr',
    DETAIL: '/payment/detail',
    COMPLETE: '/payment/complete',
  },
  TRANSACTIONS: {
    LIST: '/transactions',
    DETAIL: '/transactions/:id',
  },
  CARD: {
    LIST: '/card',
  },
} as const;
