import { useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../model/constants';
import { NavigationItem } from './nav-item';
import { cn } from '@shared/ui/shadcn/lib/utils';
import { theme } from '@shared/styles/theme';

interface BottomNavigationProps {
  className?: string;
}

export const BottomNavigation = ({ className }: BottomNavigationProps) => {
  const { pathname } = useLocation();

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={cn(
        'fixed min-w-[375px] w-responsive_container bottom-0 left-[50%] translate-x-[-50%] z-50 bg-white',
        'border-t safe-area-bottom',
        theme.safe_area_inline_padding,
        className,
      )}
    >
      <div className='h-16 max-w-md mx-auto flex items-center justify-around'>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={isActiveRoute(item.path)}
          />
        ))}
      </div>
    </nav>
  );
};
