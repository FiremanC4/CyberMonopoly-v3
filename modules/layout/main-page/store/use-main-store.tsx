import {create} from "zustand"

export interface IUseMainStore{
        isBackOnBlackBackground:boolean,
        setIsBackOnBlackBackgroundTrue: () => void;
        setIsBackOnBlackBackgroundFalse:() => void;
}

export const useMainStore = create<IUseMainStore>((set) => ({ 
    isBackOnBlackBackground: false,
    setIsBackOnBlackBackgroundTrue: () =>  set({isBackOnBlackBackground: true}),
    setIsBackOnBlackBackgroundFalse: () =>  set({isBackOnBlackBackground: false}),
}))

