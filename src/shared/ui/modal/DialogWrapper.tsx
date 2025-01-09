import useModal from '@shared/hooks/useModal';
import { useModalStore, type TModal } from '@shared/stores/modal';
import { AnimatePresence, motion } from 'motion/react';

export type TDialog = {
  title: React.ReactNode;
  description: React.ReactNode;
  confirm?: VoidFunction;
  cancel?: VoidFunction;
  confirmButtonText?: string;
  cancelmButtonText?: string;
};
interface DialogWrapperProps {
  modal?: TModal;
  config: TDialog;
}
const DialogWrapper = ({ modal, config }: DialogWrapperProps) => {
  const {
    title,
    description,
    confirm,
    cancel,
    confirmButtonText,
    cancelmButtonText,
  } = config;
  const { closeModal, cleanupModals } = useModal();
  return (
    <div className=''>
      <AnimatePresence>
        {modal?.isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className='flex items-center justify-center fixed inset-0 z-[10000]'
            onAnimationComplete={() => {
              // 닫힌 모달이 있으면 정리
              if (useModalStore.getState().modals.some((m) => !m.isVisible)) {
                cleanupModals();
              }
            }}
          >
            <motion.div
              className={`absolute z-0 inset-0 ${modal?.enableOverlay ? 'bg-black/50' : 'bg-transparent'}`}
              onClick={() =>
                modal?.enableOverlayClickClose ? closeModal() : null
              }
            />
            <div className='relative z-1 bg-white'>
              <div>{title}</div>
              <div>{description}</div>
              <div>
                {cancel && (
                  <button onClick={() => (cancel ? cancel() : closeModal())}>
                    {cancelmButtonText ?? '취소'}
                  </button>
                )}

                <button onClick={() => (confirm ? confirm() : closeModal())}>
                  {confirmButtonText ?? '확인'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialogWrapper;
