import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useModal from '@hooks/useModal';
import { QRTabKey } from '@type/qr';
import { QRTab } from './QRTab';
import { ScannerOverlay } from './ScannerOverlay';
import { Scanner } from './Scanner';

interface QRScanWidgetProps {
  onScanSuccess: (resultUrl: string) => void;
}

export const QRScanWidget = ({ onScanSuccess }: QRScanWidgetProps) => {
  const { openDialog, closeModal } = useModal();
  const [activeTab, setActiveTab] = useState<QRTabKey>(QRTabKey.QR);
  const [direction, setDirection] = useState(0);
  const [viewportRatio, setViewportRatio] = useState({
    width: 100,
    height: 100,
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction * 1000,
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction * -1000,
    }),
  };

  useEffect(() => {
    const newDirection = activeTab === QRTabKey.QR ? 1 : -1;
    setDirection(newDirection);

    if (activeTab === QRTabKey.SCAN) {
      const container = document.querySelector('.scanner-container');
      const svg = container?.querySelector('svg');
      if (svg) {
        // 기존 요소들 제거
        svg.remove();
      }
      const updateViewportRatio = () => {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        setViewportRatio({
          width: 100,
          height: (vh / vw) * 100,
        });
      };
      updateViewportRatio();
      window.addEventListener('resize', updateViewportRatio);
      return () => window.removeEventListener('resize', updateViewportRatio);
    }
  }, [activeTab]);

  const handleError = (error: unknown) => {
    if (error) {
      if (
        error instanceof Error &&
        'name' in error &&
        error.name === 'NotAllowedError'
      ) {
        openDialog('alert', {
          title: '알림',
          description: '카메라 권한이 필요합니다.\n다시 시도해 주세요.',
          confirm: () => {
            closeModal();
            setActiveTab(QRTabKey.QR);
          },
        });
      }
    }
  };

  return (
    <div className='relative h-screen'>
      <QRTab activeTab={activeTab} onTabChange={setActiveTab} />
      <AnimatePresence initial={false} custom={direction}>
        {activeTab === QRTabKey.QR ? (
          <motion.div
            key={QRTabKey.QR}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className='absolute inset-0 flex flex-col justify-center items-center'
          >
            <div className='w-[60%] aspect-square'>
              <img src='/qr-code.png' alt='QR Code' className='w-full h-full' />
            </div>
            <p className='text-center mt-10 text-black text-lg font-medium'>
              QR코드는 3분간 유효합니다
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={QRTabKey.SCAN}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className='scanner-container absolute inset-0 overflow-hidden'
          >
            <Scanner onScan={onScanSuccess} onError={handleError} />
            <ScannerOverlay viewportRatio={viewportRatio} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
