export type RegisterDTO = {
  email: string;
  password: string;
  name: string;
};

export type LoginDTO = {
  email: string;
  password: string;
};

// TODO: 응답 데이터 논의 필요
export type OrderInfoDTO = {
  orderId: string;
  orderName: string;
  amount: number;
  store: string;
  url?: string;
};

export enum HistoryPaymentStatus {
  COMPLETE = 'COMPLETE',
  CANCELED = 'CANCELED',
}

export enum HistoryPaymentMethod {
  CARD = 'CARD',
}

// TODO: 응답 데이터 논의 필요
export type HistoryDTO = {
  historyId: string;
  store: string;
  orderId: string;
  orderName: string;
  paymentStatus: HistoryPaymentStatus;
  paymentMethod: HistoryPaymentMethod;
  amount: number;
  createdAt: string;
};

// TODO: 응답 데이터 논의 필요
export type HistoryDetailDTO = {
  id: number;
  orderId: string;
  amount: number;
};
