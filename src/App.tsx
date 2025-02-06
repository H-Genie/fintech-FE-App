import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import ModalProvider from './providers/modalProvider';

// MSW 초기화를 위한 함수
const initMSW = async () => {
  const { worker } = await import('@mocks/browser');
  await worker.start();
};

// MSW 초기화 실행
initMSW();

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
