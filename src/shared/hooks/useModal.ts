import { useModalStore } from '@shared/stores/modal';

//래핑 훅. 추가 로직이 필요할지도..?
const useModal = () => {
  return { ...useModalStore() };
};

export default useModal;
