import type {
  HistoryPaymentMethod,
  HistoryPaymentStatus,
} from '@constants/payment';
import type { TransactionStatus } from '@type/payment';

/**
 * 주문 정보 응답 타입
 * @param orderId - 주문 ID
 * @param orderName - 주문 이름
 * @param amount - 주문 금액
 * @param store - 매장 이름
 */
export type OrderInfoRes = {
  orderId: string;
  orderName: string;
  amount: number;
  store: string;
};

/**
 * 결제 내역 응답 타입
 * @param id - 고유 ID
 * @param store - 매장 이름
 * @param orderName - 주문 이름
 * @param amount - 결제 금액
 * @param approvedAt - 승인 일시
 * @param cancelledAt - 취소 일시
 * @param transactionStatus - 결제 승인 상태
 */
export type TransactionsRes = {
  id: number;
  store: string;
  orderName: string;
  amount: number;
  approvedAt: string;
  cancelledAt?: string;
  transactionStatus: TransactionStatus;
  historyId: string;
  createdAt: string;
};

/**
 * 결제 내역 페이지 응답 타입
 * @param transactions - 결제 내역 리스트
 * @param totalAmount - 총 결제 금액
 * @param page - 페이지
 * @param size - 페이지 크기
 * @param totalCount - 총 결제 건수
 * @param totalPages - 총 페이지 수
 */
export type TransactionsPageRes = {
  transactions: TransactionsRes[];
  items: TransactionsRes[];
  totalAmount: number;
  page: number;
  size: number;
  totalCount: number;
  totalPages: number;
};

/**
 * 결제 내역 상세 응답 타입
 * @param historyId - 결제 내역 ID
 * @param orderId - 주문 ID
 * @param orderName - 주문 이름
 * @param paymentStatus - 결제 상태
 * @param paymentMethod - 결제 수단
 * @param amount - 결제 금액
 * @param cardInfo - 카드 정보
 * @param store - 매장 이름
 * @param createdAt - 생성 일시
 * @param canceledAt - 취소 일시
 */
export type TransactionDetailRes = {
  historyId: string;
  orderId: string;
  orderName: string;
  paymentStatus: HistoryPaymentStatus;
  paymentMethod: HistoryPaymentMethod;
  amount: number;
  cardInfo: {
    cardCompany: string;
    cardNumber: string;
    installmentPeriod: number;
  };
  store: string;
  createdAt: string;
  canceledAt?: string;
};

/**
 * 주문 정보 JWT 파싱 타입
 * @param order_name - 주문 이름
 * @param amount - 주문 금액
 * @param merchant_name - 매장 이름
 * @param iat - 토큰 발급 시간
 */
export type OrderInfoJwtRes = {
  order_name: string;
  amount: number;
  merchant_name: string;
  iat: number;
};
