import type { FC } from 'react';
import { useEffect } from 'react';
import { Scanner as QRScanner } from '@yudiel/react-qr-scanner';

interface ScannerProps {
  onScan: (resultUrl: string) => void;
  onError: (error: unknown) => void;
  classNames: string;
}

export const Scanner: FC<ScannerProps> = ({ onScan, onError, classNames }) => {
  useEffect(() => {
    const setVideoMute = () => {
      const videoElements = document.getElementsByTagName('video');
      for (const video of videoElements) {
        video.muted = true;
        video.defaultMuted = true;
        // volume을 0으로 설정
        video.volume = 0;
        // 오디오 트랙 비활성화 시도
        if (video.srcObject instanceof MediaStream) {
          const audioTracks = video.srcObject.getAudioTracks();
          audioTracks.forEach((track) => {
            track.enabled = false;
          });
        }
      }
    };

    // 초기 설정
    setVideoMute();

    // MutationObserver를 사용하여 동적으로 추가되는 video 요소도 감지하여 음소거
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        setVideoMute();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <QRScanner
      onScan={(detectedCodes) => {
        const result = detectedCodes?.[0]?.rawValue;

        if (result && result.length > 0) {
          onScan(result);
        }
      }}
      onError={(error) => {
        onError(error);
      }}
      allowMultiple={true}
      classNames={{
        container: classNames,
      }}
      styles={{
        container: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        video: {
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
        },
      }}
    />
  );
};
