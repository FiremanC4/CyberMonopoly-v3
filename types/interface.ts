import { ReactNode } from "react";

export interface IBaseProps { 
    className?: string;
    children?: ReactNode;
}

export interface IModalWindowProps extends IBaseProps {
  closeModalWindow: () => void;
}
