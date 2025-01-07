import useModal from '@shared/hooks/useModal';
import { cloneElement } from 'react';
import { Fragment } from 'react/jsx-runtime';

const ModalLayout = () => {
  const { modals } = useModal();
  return modals.map((modal) => {
    return (
      <Fragment key={modal.id}>
        {cloneElement(modal.children, { modal })}
      </Fragment>
    );
  });
};

export default ModalLayout;
