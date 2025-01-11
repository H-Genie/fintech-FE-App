import { Link } from 'react-router-dom';
import { cn } from 'src/lib/shadcn/lib/utils';
import type { NavItemProps } from '../model/types';

export const NavigationItem = ({ item, isActive }: NavItemProps) => {
  return (
    <Link
      to={item.path}
      className={cn(
        'flex flex-col items-center justify-center gap-1 w-16 p-1 relative',
        'transition-colors duration-200',
        'active:opacity-70',
        isActive 
          ? 'text-primary' 
          : 'text-muted-foreground hover:text-primary'
      )}
    >
      <item.icon className="w-5 h-5" />
      <span className="text-xs font-medium">{item.label}</span>
    </Link>
  );
};
