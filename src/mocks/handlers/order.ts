import { API_ENDPOINTS } from '@constants/apiEndpoints';
import { http, HttpResponse } from 'msw';

export const orderHandler = [
  // 주문 정보 조회
  http.get(
    `/${API_ENDPOINTS.PAYMENT.ORDER.INFO(':orderToken')}`,
    ({ params }) => {
      const { orderToken } = params;
      return HttpResponse.json({
        code: 200,
        data: {
          orderToken: `order-${orderToken}`,
          orderId: `order-${orderToken}`,
          orderName: '테스트 상품 외2',
          amount: 15000,
          store: '테스트 가맹점',
          url: 'https://example.com',
        },
      });
    },
  ),
];
