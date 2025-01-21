import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * URL의 쿼리 파라미터를 파싱하고 관리하는 커스텀 훅입니다.
 *
 * 이 훅은 현재 `location.search` 문자열에서 쿼리 파라미터를 추출하여
 * `Record` 객체로 반환합니다. 또한, 쿼리 파라미터를 처리하는 동안의 로딩 상태를
 * 제공합니다.
 *
 * @template T - 쿼리 파라미터 키를 나타내는 문자열 유니온 타입입니다.
 *
 * @param {Record<T, string>} [defaultValue={}] - URL에서 쿼리 파라미터를 찾지 못했을 경우
 * 사용할 기본값입니다. 기본값이 제공되지 않으면 빈 객체를 사용합니다.
 *
 * @returns {{
 *   params: Record<T, string>;
 *   isLoading: boolean;
 * }} `params`는 URL에서 추출한 쿼리 파라미터를 포함하는 객체이며,
 * `isLoading`은 쿼리 파라미터를 처리 중인지 나타내는 로딩 상태입니다.
 *
 * @example
 * // URL: https://example.com?token=abc123&expiredAt=2025-01-01
 * const { params, isLoading } = useQueryParams<'token' | 'expiredAt'>({
 *   token: 'defaultToken',
 *   expiredAt: 'defaultExpiration',
 * });
 *
 * console.log(params.token); // "abc123"
 * console.log(params.expiredAt); // "2025-01-01"
 * console.log(isLoading); // false
 */
export const useQueryParams = <T extends string>(
  defaultValue: Record<T, string> = {} as Record<T, string>,
): { params: Record<T, string>; isLoading: boolean } => {
  const location = useLocation();
  const [params, setParams] = useState<Record<T, string>>(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const result = Array.from(queryParams.entries()).reduce(
      (acc, [key, value]) => {
        acc[key as T] = value;
        return acc;
      },
      {} as Record<T, string>,
    );

    setParams(result);
    setIsLoading(false);
  }, [location]);

  return { params, isLoading };
};
