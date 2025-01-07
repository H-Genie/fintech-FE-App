import { create } from 'zustand';

type TModal = {
  id: string; // 고유 ID
  isOpen: boolean;
  /**
   * 모달에 렌더링할 React 요소
   */
  children: React.ReactNode;
  /**
   * 오버레이 사용 여부
   */
  useOverlay?: boolean;
  /**
   * 배경 스크롤 허용 여부
   */
  allowBackgroundScroll?: boolean;
  /**
   * 오버레이 클릭으로 닫기 허용 여부
   */
  allowOverlayClickClose?: boolean;
};

export type TModalState = {
  modals: TModal[];
  openModal: (
    children: React.ReactNode,
    options?: Partial<Omit<TModal, 'id' | 'isOpen' | 'children'>>,
  ) => void;
  closeModal: () => void; // 배열의 마지막 모달 닫기
  closeAllModal: () => void; // 모든 모달 닫기
};

export const modalState = create<TModalState>((set) => ({
  modals: [],

  // 모달 열기
  openModal: (children, options) =>
    set((state) => ({
      modals: [
        ...state.modals,
        {
          id: crypto.randomUUID(), // 고유 ID 생성
          isOpen: true,
          children,
          ...options, // 옵션 병합
        },
      ],
    })),

  // 배열의 마지막 모달 닫기
  closeModal: () =>
    set((state) => {
      if (state.modals.length === 0) return state; // 닫을 모달이 없으면 상태 그대로 유지
      return {
        modals: state.modals.slice(0, -1), // 마지막 모달 제거
      };
    }),

  // 모든 모달 닫기
  closeAllModal: () =>
    set(() => ({
      modals: [], // 배열 초기화
    })),
}));
