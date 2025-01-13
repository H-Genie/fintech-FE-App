import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import ModalProvider from './providers/modal-provider';

//MSW를 개발 환경에서만 시작하도록 설정합니다.
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('@app/mocks/browser');
  worker.start();
}

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ModalProvider />
    </QueryClientProvider>
  );
}

export default App;
