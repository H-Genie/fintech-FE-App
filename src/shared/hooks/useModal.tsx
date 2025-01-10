import { useModalStore, type TModalOptions } from '@shared/stores/modal';
import DialogWrapper, {
  type TDialog,
  type TDialogConfig,
  type TDialogType,
} from '@shared/ui/modal/DialogWrapper';
import ModalWrapper from '@shared/ui/modal/ModalWrapper';

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
      enableBackgroundScroll: options?.enableBackgroundScroll ?? false,
    });
  };

  const openDialog = (type: TDialogType, config: TDialogConfig) => {
    const _config: TDialog = {
      type,
      ...config,
    };
    open('dialog', <DialogWrapper config={_config} />, {
      enableOverlay: true,
      enableOverlayClickClose: false,
      enableBackgroundScroll: false,
    });
  };
  return { openModal, openDialog, closeModal, closeAllModal, cleanupModals };
};

export default useModal;
