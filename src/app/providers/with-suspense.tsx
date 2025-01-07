import { Suspense } from 'react';
import type { ComponentType } from 'react';
import { LoadingSpinner } from '@shared/ui';

interface WithSuspenseOptions {
  fallback?: React.ReactNode;
}

export const withSuspense = (
  Component: React.LazyExoticComponent<ComponentType<any>>,
  options: WithSuspenseOptions = {}
) => {
  return function SuspenseWrapper() {
    return (
      <Suspense fallback={options.fallback ?? <LoadingSpinner />}>
        <Component />
      </Suspense>
    );
  };
}; 