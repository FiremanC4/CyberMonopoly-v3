"use client"
import { MainPage } from "@/modules/layout/main-page/main-page";
import { ColumnWrapper } from "@/modules/layout/main-page/components/column-wrapper";
import Image from "next/image";
import { ButtonWrapperColumnDirection } from "@/modules/layout/main-page/components/button-wrapper";
import { NicknameInterface } from "@/ai-assistent/claude/play-modal";
import { HostModal1 } from "@/ai-assistent/claude/host-moddal";
import { useModalStore } from "@/store/store-modal";

export default function NickName() {
  const isHostOrConnectOpen = useModalStore(state=>state.modals.isHostOrConnectOpen);
  const  hostOrConnect = useModalStore(state=>state.hostOrConnect);
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
            <NicknameInterface   />
          </div>
        </ButtonWrapperColumnDirection>
      </ColumnWrapper>
    </MainPage>

  {isHostOrConnectOpen && 
      <HostModal1
          HostorConect={hostOrConnect}
          userName=""
      /> 
  }
    </>
  );
}
