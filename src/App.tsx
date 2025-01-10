import ModalProvider from '@app/providers/modal-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ModalProvider />
    </QueryClientProvider>
  );
}

export default App;
