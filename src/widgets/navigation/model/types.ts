import { ROUTES } from '@shared/config/routes';
import type { FC } from 'react';
import type { LucideProps } from 'lucide-react';

export type NavigationID = 'home' | 'scan' | 'payments' | 'profile';
export type NavigationPath = typeof ROUTES.APP[keyof typeof ROUTES.APP];

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
