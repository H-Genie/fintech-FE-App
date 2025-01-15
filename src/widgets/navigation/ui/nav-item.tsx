import { Link } from 'react-router-dom';
import { cn } from '@shared/ui/shadcn/lib/utils';
import type { NavItemProps } from '../model/types';
import Icon from '@shared/ui/icon/Icon';

export const NavigationItem = ({ item, isActive }: NavItemProps) => {
  return (
    <Link
      to={item.path}
      className={cn(
        'flex flex-col items-center justify-center gap-1 w-16 p-1 relative',
        'transition-colors duration-200',
        'active:opacity-70',
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
      )}
    >
      <Icon name={item.icon} />
      <span className='text-xs font-medium'>{item.label}</span>
    </Link>
  );
};
