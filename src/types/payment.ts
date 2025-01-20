export interface PaymentOrder {
  orderId: string;
  store: string;
  productName: string;
  amount: number;
  token: string;
  expiredAt: number;
}

export type PaymentStatus = 'pending' | 'completed' | 'failed';
