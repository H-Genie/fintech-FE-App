import { Outlet } from 'react-router-dom';
import { BottomNavigation } from '@widgets/navigation';
import { cn } from '@shared/ui/shadcn/lib/utils';
import { theme } from '@shared/styles/theme';

export const BottomNavLayout = () => {
  return (
    <div className='h-[100dvh]'>
      <header
        className={cn(
          `sticky bg-white  flex items-center top-0 h-14 w-responsive_container mx-auto border-b`,
          theme.safe_area_inline_padding,
        )}
      >
        Header
      </header>
      <main className={cn('w-responsive_container mx-auto pb-[4rem] bg-white')}>
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};
