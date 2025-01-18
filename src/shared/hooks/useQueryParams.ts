import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface QueryParams {
  token: string;
  expiredAt: string;
  [key: string]: string;
}

interface UseQueryParamsReturn {
  params: QueryParams;
  isLoading: boolean;
}

export const useQueryParams = (): UseQueryParamsReturn => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState<QueryParams>({
    token: '',
    expiredAt: '',
  });

  useEffect(() => {
    setIsLoading(true);

    const queryParams = new URLSearchParams(location.search);
    const stateParams = location.state as Partial<QueryParams> | null;

    const tokenValue = queryParams.get('token');
    const expiredAtValue = queryParams.get('expiredAt');

    setParams((prev) => ({
      ...prev,
      token: tokenValue || '',
      expiredAt: expiredAtValue || '',
      ...(stateParams || {}),
    }));

    setIsLoading(false);
  }, [location]);

  return { params, isLoading };
};
