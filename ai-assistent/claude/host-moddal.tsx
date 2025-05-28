"use client";
import { useRouter } from "next/navigation";
import { useMainStore } from '@/modules/layout/main-page/store/use-main-store';
import Image from 'next/image';
import { useEffect } from 'react';
import { useModalStore } from '@/store/store-modal';
 


export function HostModal1({
  HostorConect,
  userName,
}: {
  HostorConect: string;
  userName: string;
}) {
  const router = useRouter(); // ← тут
  const isHost = HostorConect === 'Host';

  const setIsBackOnBlackBackgroundTrue = useMainStore(state => state.setIsBackOnBlackBackgroundTrue);
  const setIsBackOnBlackBackgroundFalse = useMainStore(state=> state.setIsBackOnBlackBackgroundFalse);
  const closeModal = useModalStore(state => state.closeModal);

  useEffect(() => {
    setIsBackOnBlackBackgroundTrue();
    return () => {
      setIsBackOnBlackBackgroundFalse();
    };
  }, [setIsBackOnBlackBackgroundTrue]);

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100vw',
        height: '100vh',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
      }}
      onClick={() => { 
        setIsBackOnBlackBackgroundFalse();
        closeModal("isHostOrConnectOpen");
      }}
    >
      <div
        style={{
          maxHeight: '589px',
          maxWidth: '730px',
          width: '100%',
          padding: '45px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          backdropFilter: 'blur(50px) brightness(0.5)',
          WebkitBackdropFilter: 'blur(50px)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 1)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
        onClick={(event)=>{ event.stopPropagation() }}
      >
        {/* Заголовок */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src={isHost ? '/Host.png' : '/Connect (8).png'}
            width={isHost ? 176 : 318}
            height={isHost ? 76 : 89}
            alt={isHost ? 'Host' : 'Connect'}
          />
        </div>

        {/* Nickname */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image
            src={isHost ? '/Your nickname_ (2).png' : '/Your nickname_ (3).png'}
            width={228}
            height={44}
            alt="Nickname"
          />
          <span style={{ fontSize: '24px', color: 'white' }}>
            {userName || 'NoName'}
          </span>
        </div>

        {/* Ready to play / Accessible rooms */}
        <Image
          src={isHost ? '/Ready to play.png' : '/Accessible rooms_.png'}
          width={isHost ? 210 : 264}
          height={isHost ? 210 : 264}
          alt={isHost ? 'Ready to play' : 'Accessible rooms'}
        />

        {/* Textarea */}
        <textarea
          style={{
            position: 'relative',
            top: '-15px',
            width: '100%',
            height: '166px',
            border: '2px solid white',
            resize: 'none',
            backgroundColor: 'rgba(84, 84, 84, 0.5)',
            borderRadius: '8px',
            color: 'white',
            padding: '10px',
            fontSize: '16px',
          }}
        />

        {/* Кнопка */}
        <div
          style={{
            position: 'relative',
            top: '-15px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Image
            src={isHost ? '/Connect (5).png' : '/Connect (11).png'}
            width={200}
            height={63}
            alt="Start"
            onClick={() => {
              if (isHost ) {
                router.push("/loading"); // isHost true commentar
              }
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
}
