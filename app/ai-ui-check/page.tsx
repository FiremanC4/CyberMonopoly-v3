// import { NicknameInterface } from "@/ai-assistent/claude/play-modal" 
// import { HostConnectModal } from "@/ai-assistent/claude/host-modal"
// import { mockData } from "@/ai-assistent/claude/host-modal"
// import { HostModal1 } from "@/ai-assistent/claude/host-moddal"
// import Loadable from "next/dist/shared/lib/loadable.shared-runtime"
// import ChooseColor from "@/ai-assistent/claude/choose-your-color"
// import ModalBlockWrapper from "@/ai-assistent/claude/mini-modal-card"
// import { MiniModal } from "@/ai-assistent/claude/mini-modal-card"
// import { ButtonBlock } from "@/ai-assistent/claude/mini-modal-card"
import ChooseColor from "@/ai-assistent/claude/choose-your-color"
export default function AI() {

    return ( 
        <> 
        {/* <ButtonBlock/> */}
        <ChooseColor/>
            {/* <HostModal1  
                HostorConect="Hostй"  
                userName="Ostap"
            /> */}
            {/* <HostConnectModal
                mockData={[mockData[1]]} 
                background="transarent"
                color="black"
                dynamicName="NoName"
                buttonDescription="connect"
            /> */}

        {/* <ModalBlockWrapper>
            // <MiniModal
            //     src="/Choose your color.png"
            //     width={539}
            //     height={77}
            //     description="Choose your favorite color come to "
            //     borderColor="rgba(255, 255, 255, 0.5)"
            //     backgroundImage="linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3))"
            // />
        </ModalBlockWrapper> */}
        </>
    )
}