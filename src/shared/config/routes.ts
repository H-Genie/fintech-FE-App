export const ROUTES = {
  BASIC: {
    LOGIN: '/basic/login',
    SPLASH: '/basic/splash'
  },
  APP: {
    HOME: '/app/home',
    SCAN: '/app/scan',
    PAYMENTS: '/app/payments',
    PROFILE: '/app/profile'
  }
} as const;

export type BasicRoutes = keyof typeof ROUTES.BASIC;
export type AppRoutes = keyof typeof ROUTES.APP; 