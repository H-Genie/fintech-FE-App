import useModal from '@shared/hooks/useModal';
import type { TModalOptions } from '@shared/stores/modal';
import { Button } from '@shared/ui/shadcn/components/ui/button';

const 모달_옵션_테이블 = [
  {
    key: 'enableOverlay',
    description: '오버레이 사용 여부',
    defaultValue: 'true',
  },
  {
    key: 'enableOverlayClickClose',
    description: '오버레이 클릭으로 닫기 허용 여부',
    defaultValue: 'true',
  },
  {
    key: 'enableBackgroundScroll',
    description: '배경 스크롤 허용 여부',
    defaultValue: 'false',
  },
];

const ModalUITest = () => {
  const { openModal, openDialog, closeModal, closeAllModal } = useModal();
  const BorderStyle = `border-[1px] border-solid border-black`;
  const 다이얼_테스트_함수1 = () => {
    openDialog('confirm', {
      title: 'TITLE',
      description: '확인을 누르면 다이얼로그가 닫힘',
      confirm: closeModal,
    });
  };

  const 다이얼_테스트_함수2 = () => {
    openDialog('confirm', {
      title: 'TITLE',
      description: '확인을 누르면 열려있는 모달과 다이얼로그 전부 닫힘',
      confirm: closeAllModal,
    });
  };
  const 모달_테스트_함수 = (
    callback?: VoidFunction,
    options?: TModalOptions,
  ) => {
    if (options) {
      openModal(<Modal callback={callback} />, options);
    } else {
      openModal(<Modal callback={callback} />);
    }
  };
  return (
    <div className='w-[min(100%,1200px)] flex flex-col gap-20 py-8 min-h-[200dvh] mx-auto  bg-slate-50'>
      <section className='px-8'>
        <div className='pb-8'>
          <h1 className='font-bold text-2xl pb-4 text-start'>1.Modal</h1>
          <h2 className='font-bold text-xl text-start'>Modal Options</h2>
          <p className=' text-slate-600 text-[16px] pb-2'>
            *useModal의 Modal은 openModal의 두번째 인자를 통해서 옵션을 변경 할
            수 있다.
          </p>
          <div className=' overflow-auto'>
            <table className='min-w-[768px]'>
              <thead>
                <tr className='bg-slate-300'>
                  <th className={`${BorderStyle} h-[36px] px-2`}>Key</th>
                  <th className={`${BorderStyle} h-[36px] px-2`}>
                    Description
                  </th>
                  <th className={`${BorderStyle} h-[36px] px-2`}>
                    DefaultValue
                  </th>
                </tr>
              </thead>
              <tbody>
                {모달_옵션_테이블.map((data) => {
                  return (
                    <tr>
                      <td className={`${BorderStyle} h-[32px] px-2`}>
                        {data.key}
                      </td>
                      <td
                        className={`${BorderStyle} h-[32px] px-2 text-center`}
                      >
                        {data.description}
                      </td>
                      <td
                        className={`${BorderStyle} h-[32px] px-2 text-center`}
                      >
                        {data.defaultValue}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-lg text-start pb-2'> 📌 모달 테스트</h2>
          <hr className='pb-4' />
          <ul className='flex flex-col gap-4 list-decimal pl-4'>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(() => closeModal())}
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableOverlay: false,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableOverlay: false</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableOverlayClickClose: false,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableOverlayClickClose: false</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableBackgroundScroll: true,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableBackgroundScroll: true</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(다이얼_테스트_함수1)}
                >
                  Modal Open
                </Button>
                <p>모달과 다이얼로그 중첩 테스트(단일 모달 닫기)</p>
              </div>
            </li>

            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(다이얼_테스트_함수2)}
                >
                  Modal Open
                </Button>
                <p>
                  모달과 다이얼로그 중첩 테스트(다이얼로그에서 중첩된 모든 모달
                  닫기)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='px-8'>
        <div className='pb-8'>
          <h1 className='font-bold text-2xl pb-4 text-start'>2.Dialog</h1>
          <h2 className='font-bold text-xl text-start'>Dialog Options</h2>
          <p className=' text-slate-600 text-[16px] pb-2'>
            *useModal의 Modal은 openModal의 두번째 인자를 통해서 옵션을 변경 할
            수 있다.
          </p>
          <div className=' overflow-auto'>
            <table className='min-w-[768px]'>
              <thead>
                <tr className='bg-slate-300'>
                  <th className={`${BorderStyle} h-[36px] px-2`}>Key</th>
                  <th className={`${BorderStyle} h-[36px] px-2`}>
                    Description
                  </th>
                  <th className={`${BorderStyle} h-[36px] px-2`}>
                    DefaultValue
                  </th>
                </tr>
              </thead>
              <tbody>
                {모달_옵션_테이블.map((data) => {
                  return (
                    <tr>
                      <td className={`${BorderStyle} h-[32px] px-2`}>
                        {data.key}
                      </td>
                      <td
                        className={`${BorderStyle} h-[32px] px-2 text-center`}
                      >
                        {data.description}
                      </td>
                      <td
                        className={`${BorderStyle} h-[32px] px-2 text-center`}
                      >
                        {data.defaultValue}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-lg text-start pb-2'> 📌 모달 테스트</h2>
          <hr className='pb-4' />
          <ul className='flex flex-col gap-4 list-decimal pl-4'>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(() => closeModal())}
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableOverlay: false,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableOverlay: false</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableOverlayClickClose: false,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableOverlayClickClose: false</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableBackgroundScroll: true,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableBackgroundScroll: true</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(다이얼_테스트_함수1)}
                >
                  Modal Open
                </Button>
                <p>모달과 다이얼로그 중첩 테스트(단일 모달 닫기)</p>
              </div>
            </li>

            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(다이얼_테스트_함수2)}
                >
                  Modal Open
                </Button>
                <p>
                  모달과 다이얼로그 중첩 테스트(다이얼로그에서 중첩된 모든 모달
                  닫기)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='px-8'>
        <div className='pb-8'>
          <h2 className='font-bold text-xl text-start'>Modal Options</h2>
          <p className=' text-slate-600 text-[16px] pb-2'>
            *useModal의 Modal은 openModal의 두번째 인자를 통해서 옵션을 변경 할
            수 있다.
          </p>
          <div className=' overflow-auto'>
            <table className='min-w-[768px]'>
              <thead>
                <tr className='bg-slate-300'>
                  <th className={`${BorderStyle} h-[36px] px-2`}>Key</th>
                  <th className={`${BorderStyle} h-[36px] px-2`}>
                    Description
                  </th>
                  <th className={`${BorderStyle} h-[36px] px-2`}>
                    DefaultValue
                  </th>
                </tr>
              </thead>
              <tbody>
                {모달_옵션_테이블.map((data) => {
                  return (
                    <tr>
                      <td className={`${BorderStyle} h-[32px] px-2`}>
                        {data.key}
                      </td>
                      <td
                        className={`${BorderStyle} h-[32px] px-2 text-center`}
                      >
                        {data.description}
                      </td>
                      <td
                        className={`${BorderStyle} h-[32px] px-2 text-center`}
                      >
                        {data.defaultValue}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-lg text-start pb-2'> 📌 모달 테스트</h2>
          <hr className='pb-4' />
          <ul className='flex flex-col gap-4 list-decimal pl-4'>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(() => closeModal())}
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableOverlay: false,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableOverlay: false</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableOverlayClickClose: false,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableOverlayClickClose: false</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() =>
                    모달_테스트_함수(() => closeModal(), {
                      enableBackgroundScroll: true,
                    })
                  }
                >
                  Modal Open
                </Button>
                <p>단일 Modal 테스트 - enableBackgroundScroll: true</p>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(다이얼_테스트_함수1)}
                >
                  Modal Open
                </Button>
                <p>모달과 다이얼로그 중첩 테스트(단일 모달 닫기)</p>
              </div>
            </li>

            <li>
              <div className='flex items-center gap-4'>
                <Button
                  size={'sm'}
                  onClick={() => 모달_테스트_함수(다이얼_테스트_함수2)}
                >
                  Modal Open
                </Button>
                <p>
                  모달과 다이얼로그 중첩 테스트(다이얼로그에서 중첩된 모든 모달
                  닫기)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ModalUITest;

const Modal = ({ callback }: { callback?: VoidFunction }) => {
  const { closeModal } = useModal();
  return (
    <div className='bg-white flex flex-col gap-4 rounded-[12px] py-4 w-[400px]'>
      <div className='modal-header flex justify-between px-4'>
        <h2 className='font-bold'>TITLE</h2>
      </div>
      <div className='modal-body  px-4'>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          pariatur sit minima molestiae ad sint ex quam? Excepturi minus,
          voluptatibus eligendi aut officiis facilis commodi delectus sit
          quisquam, perferendis perspiciatis!
        </div>
      </div>
      <div className='modal-footer flex gap-2 px-4'>
        <Button className='w-full' variant={'outline'} onClick={closeModal}>
          CANCEL
        </Button>
        <Button className='w-full' onClick={callback}>
          OK
        </Button>
      </div>
    </div>
  );
};
