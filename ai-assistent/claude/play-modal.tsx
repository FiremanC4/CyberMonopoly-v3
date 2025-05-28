'use client';
import React, { useEffect, useState } from 'react';
import { styled } from '@stitches/react';
import Image from 'next/image';
import Link from 'next/link';
import { useMainStore } from '@/modules/layout/main-page/store/use-main-store';
import { useModalStore } from '@/store/store-modal';

const Background = styled('div', {
  position: 'absolute',
  inset: 0,
  opacity: 0.2,
  zIndex: 0,
  '&::before': {
    content: '',
    backgroundSize: '40px 40px',
    backgroundPosition: '0 0, 20px 20px',
  },
});

const Content = styled('div', {
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  color: 'white',
  padding: '2rem',
  display: "flex",
  flexDirection: "column",
  width: "600px",
});

const Back = styled("span", { 
  position: 'absolute',
  left: "70px",
  bottom: "56px",
  fontSize: "32px",
  color: "white",
  variants: {
    elevated: {
      true: {
        zIndex: 20,
      },
      false: {
        zIndex: 'auto',
      },
    },
  },
});

export const Input = styled('input', {
  maxWidth: '576px',
  height: "81px",
  marginBottom: '1.5rem',
  border: '0.5px solid white',
  backgroundColor: 'transparent',
  borderRadius: "10px",
  color: 'white',
  fontSize: '32px',
  margin: "20px 0px 40px 0px",
  background: 'black',
  '&::placeholder': {
    color: 'rgba(217, 217, 217, 1)',
    paddingLeft: "30px",
  },
  '&:focus': {
    outline: 'none',
    borderColor: 'white',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

const ButtonGroup = styled('div', {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  marginBottom: '1rem',
});

const Loading = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  color: '#9ca3af',
});

const Spinner = styled('div', {
  width: '1rem',
  height: '1rem',
  border: '0.5px solid white',
  borderTopColor: 'white',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
});


export function NicknameInterface() {
  const [nickname, setNickname] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const isBackOnBlackBackground = useMainStore(state => state.isBackOnBlackBackground);
  const openModal = useModalStore(state => state.openModal);
  const setConnect = useModalStore(state=>state.setConnect);
  const setHost = useModalStore(state=>state.setHost);
  useEffect(() => {
    if (nickname.trim()) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [nickname]);

  return (
    <>
      <Background />
      <Content> 
        <Image
          src="/Nickname.png"
          width={272}
          height={85}
          alt="NickName"
        />
        <Input
          type="text"
          placeholder="Enter your nick name..."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
          disabled={isConnecting}
        />
        <ButtonGroup>
          <Image
            src={isDark ? "/Connect (3).png" : "/Connect (2).png"}
            width={273}
            height={81}
            alt='Connect'
            onClick={() => { 
              if(nickname.trim()) { 
                  openModal("isHostOrConnectOpen"); 
                  setConnect();
              }
            }}
          />
          
          <Image
            src={isDark ? "/Host (2).png" : "/Host (1).png"}
            width={273}
            height={81}
            alt='Host'
            onClick={() => { 
              if(nickname.trim()){ 
                openModal("isHostOrConnectOpen"); 
                setHost();
              }
            }}
          />
        </ButtonGroup>
        {isConnecting && (
          <Loading>
            <Spinner />
            <span>Обработка...</span>
          </Loading>
        )}
      </Content>

      <Back  style={{
        zIndex: isBackOnBlackBackground ? 100 : "auto",
      }}

      elevated={isBackOnBlackBackground}>
        <Link href="/">
          Back
        </Link>
      </Back>
    </>
  );
}
