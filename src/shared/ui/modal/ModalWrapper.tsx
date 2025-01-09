import useModal from '@shared/hooks/useModal';
import { useModalStore, type TModal } from '@shared/stores/modal';
import { AnimatePresence, motion } from 'motion/react';

interface ModalProps {
  modal?: TModal;
  children: React.ReactNode;
}
const ModalWrapper = ({ modal, children }: ModalProps) => {
  const { closeModal, cleanupModals } = useModal();

  return (
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
          <motion.div className='relative z-1 bg-white'>{children}</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWrapper;
