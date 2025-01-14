import { List, Camera, CreditCard } from 'lucide-react';
import type { NavItem } from './types';
import { ROUTES } from '@shared/config/routes';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'payment',
    label: '결제내역',
    icon: List,
    path: ROUTES.PAYMENT.MAIN,
  },
  {
    id: 'qr-payment',
    label: 'QR 결제',
    icon: Camera,
    path: ROUTES.QR.MAIN,
  },
  {
    id: 'card',
    label: '카드',
    icon: CreditCard,
    path: ROUTES.CARD.MAIN,
  },
] as const;
