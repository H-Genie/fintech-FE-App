import ModalLayout from '@app/layouts/modal-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ModalLayout />
    </QueryClientProvider>
  );
}

export default App;
