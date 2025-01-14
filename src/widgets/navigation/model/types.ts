import { ROUTES } from '@shared/config/routes';
import type { FC } from 'react';
import type { LucideProps } from 'lucide-react';

export type NavigationID = 'payment' | 'qr-payment' | 'card';
export type NavigationPath =
  | typeof ROUTES.PAYMENT.MAIN
  | typeof ROUTES.QR.MAIN
  | typeof ROUTES.CARD.MAIN;

export interface NavItem {
  id: NavigationID;
  label: string;
  icon: FC<LucideProps>;
  path: NavigationPath;
}

export interface NavItemProps {
  item: NavItem;
  isActive: boolean;
}
