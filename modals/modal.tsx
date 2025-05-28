import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ColumnWrapper } from "@/modules/layout/main-page/components/column-wrapper"
import { mockModal1 } from "@/mock/modal-logic"
import { ChevronRight } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { IModalWindowProps } from "@/types/interface"

export const ModalWindow: React.FC<IModalWindowProps> = ({
  children,
  className,
  closeModalWindow,
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || typeof window === "undefined" || !document.body) return null

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[90] flex items-center justify-center bg-black/60",
        className // клас для зовнішнього фону
      )}
      onClick={closeModalWindow}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[900px] w-full mx-4 bg-black/80 border-2 border-blue-900 rounded-[20px] py-[60px] px-[78px]"
      >
        <ColumnWrapper className="gap-[60px] items-center justify-center w-full">
          {children}
        </ColumnWrapper>
      </div>
    </div>,
    document.body
  )
}

export const HelpData: React.FC = () => {
  const [mockModalArrayKey, setMockModalArrayKey] = useState<"firstPart" | "secondPart">("firstPart")
  return (
    <>
      <Image
        src="/How to play.png"
        width={352}
        height={81}
        alt="How to play"
      />
      <div 
        style={{
          gap:"60px", 
        }}
      className="flex items-center justify-center gap-[50px] w-full mt-4 relative">
        {mockModal1[mockModalArrayKey].map((value: string, index: number) => (
          <div key={index} className="cursor-pointer text-white">
            {value}
          </div>
        ))}

        {mockModalArrayKey === "firstPart" ? (
          <ChevronRight
            className="w-[24px] h-[24px] text-white cursor-pointer"
            onClick={() => setMockModalArrayKey("secondPart")}
          />
        ) : (
          <ChevronLeft
            style={{ 
              order:"-1",
            }}
            className="absolute right-[20px] order-[-1] w-[24px] h-[24px] text-white cursor-pointer"
            onClick={() => setMockModalArrayKey("firstPart")}
          />
        )}
      </div>
    </>
  )
}
