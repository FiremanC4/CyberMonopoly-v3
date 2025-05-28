"use client"
import { MainPage } from "@/modules/layout/main-page/main-page";
import { ColumnWrapper } from "@/modules/layout/main-page/components/column-wrapper";
import Image from "next/image";
import { ButtonWrapperColumnDirection } from "@/modules/layout/main-page/components/button-wrapper";
import { Button } from "@/components/ui/button";
import { ModalWindow } from "@/modals/modal";
import { useModalStore } from "@/store/store-modal";
import { HelpData } from "@/modals/modal";
import Link from "next/link";


export default function Home() {
  const isHelpOpen  = useModalStore(state => state.modals.isHelpOpen);
  const isPlayOpen = useModalStore(state => state.modals.isPlayOpen);
  const closeModal = useModalStore(state => state.closeModal);
  const openModal = useModalStore(state => state.openModal);

  return (
    <> 
    <MainPage>
      <ColumnWrapper className="flex-col">
        <Image
          src="/Title.png"
          width={746}
          height={343}
          alt="Monopoly-CyberPunk"
        />
        
        <ButtonWrapperColumnDirection>
          <div className="flex flex-col justify-center h-auto items-center gap-[20px] p-4 rounded-lg">
                          <Link href="/nick-name">
            <Button
              className="text-white text-[90px] min-h-[81px] max-w-[273px] px-4 py-1 rounded-md font-semibold transition-all duration-300"
              style={{
                backgroundImage:
                "linear-gradient(to bottom, rgba(236,31,144,1) 70%, rgba(134,18,82,1))",
                backgroundPosition: "center",
                backgroundSize: "cover",
                fontSize:"32px",
              }}
              onClick={() => openModal("isPlayOpen")}
            >
                Play
            </Button>
            </Link>
          </div>
        </ButtonWrapperColumnDirection>
      </ColumnWrapper>

        {isHelpOpen && (
        <ModalWindow closeModalWindow={() => closeModal("isHelpOpen")}> 
            <HelpData/>

        </ModalWindow>
      )}
      {isPlayOpen && (
        <ModalWindow className="" closeModalWindow={() => closeModal("isPlayOpen")}>   
          <HelpData/>
        </ModalWindow>
      )}
    </MainPage>
    </>
  );
}


