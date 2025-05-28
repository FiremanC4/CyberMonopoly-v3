//  column wrapper need to export to global components
import { IBaseProps } from "@/types/interface"
import { cn } from "@/lib/utils"

export const ColumnWrapper: React.FC<IBaseProps> = ({children, className}) => { 
  return  ( 
    <div 
      style={{
        height:"100vh",
      }}
      className={cn("bg-[red] h-[50px] items-center justify-center flex flex-col gap-[60px]",className)}>
        {children}
    </div>
  )
}