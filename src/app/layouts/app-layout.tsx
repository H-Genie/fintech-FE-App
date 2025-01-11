import { Outlet } from 'react-router-dom';
import { BottomNavigation } from '@widgets/navigation';

export const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <main className="container">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
}; 