import type { TModal } from '@shared/stores/modal';

interface ModalProps {
  modal?: TModal;
  children: React.ReactNode;
}
const Modal = ({ modal, children }: ModalProps) => {
  return (
    <div className='flex items-center justify-center fixed inset-0 z-[10000]'>
      <div
        className={`absolute z-0 inset-0 ${modal?.useOverlay ? 'bg-black/50' : 'bg-transparent'}`}
      />
      <div className='relative z-1 bg-white p-8'>{children}</div>
    </div>
  );
};

export default Modal;
