import { ROUTES } from '@shared/config/routes';
import type { IconName } from '@shared/ui/icon/Icon';

export type NavigationID = 'payment' | 'qr-payment' | 'card';
export type NavigationPath =
  | typeof ROUTES.PAYMENT.MAIN
  | typeof ROUTES.QR.MAIN
  | typeof ROUTES.CARD.MAIN;

export interface NavItem {
  id: NavigationID;
  label: string;
  icon: IconName;
  path: NavigationPath;
}

export interface NavItemProps {
  item: NavItem;
  isActive: boolean;
}
