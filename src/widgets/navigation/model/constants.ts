import { House, CircleDollarSign, CreditCard, CircleUserRound } from 'lucide-react';
import type { NavItem } from './types';
import { ROUTES } from '@shared/config/routes';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: '홈',
    icon: House,
    path: ROUTES.APP.HOME,
  },
  {
    id: 'scan',
    label: 'QR스캔',
    icon: CircleDollarSign,
    path: ROUTES.APP.SCAN,
  },
  {
    id: 'payments',
    label: '결제내역',
    icon: CreditCard,
    path: ROUTES.APP.PAYMENTS,
  },
  {
    id: 'profile',
    label: '내정보',
    icon: CircleUserRound,
    path: ROUTES.APP.PROFILE,
  },
] as const;
