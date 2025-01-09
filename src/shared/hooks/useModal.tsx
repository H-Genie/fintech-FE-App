import { useModalStore, type TModalOptions } from '@shared/stores/modal';
import DialogWrapper, { type TDialog } from '@shared/ui/modal/DialogWrapper';
import ModalWrapper from '@shared/ui/modal/ModalWrapper';

//래핑 훅. 추가 로직이 필요할지도..?
const useModal = () => {
  const {
    openModal: open,
    closeAllModal,
    closeModal,
    cleanupModals,
  } = useModalStore();

  const openModal = (children: React.ReactElement, options?: TModalOptions) => {
    open('modal', <ModalWrapper>{children}</ModalWrapper>, {
      enableOverlay: options?.enableOverlay ?? true,
      enableOverlayClickClose: options?.enableOverlayClickClose ?? true,
      enableBackgroundScroll: options?.enableBackgroundScroll ?? true,
    });
  };

  const openDialog = ({
    type,
    title,
    description,
    confirm,
    cancel,
    confirmButtonText,
    cancelmButtonText,
  }: TDialog) => {
    const config: TDialog = {
      type,
      title,
      description,
      confirm,
      cancel,
      confirmButtonText,
      cancelmButtonText,
    };
    open('dialog', <DialogWrapper config={config} />, {
      enableOverlay: true,
      enableOverlayClickClose: true,
      enableBackgroundScroll: true,
    });
  };
  return { openModal, openDialog, closeModal, closeAllModal, cleanupModals };
};

export default useModal;
