export const ROUTES = {
  SPLASH: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PAYMENT: {
    MAIN: '/payment',
    DETAIL: '/payment/:id',
  },
  QR: {
    MAIN: '/qr',
    SCAN: '/qr/scan',
    DETAIL: '/qr/payment/:id',
    COMPLETE: '/qr/payment/complete',
  },
  CARD: {
    MAIN: '/card',
  },
} as const;
