import { ROUTES } from '@shared/config/routes';
import type { IconName } from '@shared/ui/icon/Icon';

export type NavigationID = 'transactions' | 'qr-payment' | 'card';
export type NavigationPath =
  | typeof ROUTES.TRANSACTIONS.LIST
  | typeof ROUTES.PAYMENT.QR
  | typeof ROUTES.CARD.LIST;

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
