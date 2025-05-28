import { cn } from "@/lib/utils";
import { IBaseProps } from "@/types/interface";

export const MainPage: React.FC<IBaseProps> = ({ children, className }) => {
  return (
    <div
       style={{
        background:"rgba(0,0,0,0.6)",
       }}
      className={cn(
        "flex flex-col items-center justify-center w-full min-h-screen",
        className
      )}
    >
      {children}
    </div>
  );
};
