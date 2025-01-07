import { useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../model/constants';
import { NavigationItem } from './nav-item';
import { cn } from 'src/lib/shadcn/lib/utils';

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
        "fixed bottom-0 left-0 right-0 z-50",
        "border-t safe-area-bottom",
        className
      )}
    >
      <div className="h-16 max-w-md mx-auto flex items-center justify-around">
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