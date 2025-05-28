import { cn } from "@/lib/utils";
import { IBaseProps } from "@/types/interface";

/**
 * Wrapper component that aligns its children vertically with spacing and content alignment.
 */
export const ButtonWrapperColumnDirection: React.FC<IBaseProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-wrap justify-center  items-center gap-[20px] bg-[blue]", // content-center = align-content: center
        className
      )}
    >
      {children}
    </div>
  );
};
