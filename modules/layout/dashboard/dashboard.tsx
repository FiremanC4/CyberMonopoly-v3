import React, { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";

export const DashBoard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor:"red",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export const Container: React.FC<{ children: React.ReactNode,height?:string, width?: string }> = ({ children,height,width}) => {
  return (
    <div
      style={{
        display: "flex",
        width: width ||"100%",
        height: height,
        justifyContent: "space-between",
        backgroundColor: "blue",
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  );
};

interface ICornerDiv {
  src: string;
  borderColor: string;
  children: ReactNode;
}

export const CornerDiv: React.FC<ICornerDiv> = ({ src, children, borderColor, ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // або "cover", залежно від бажаного ефекту
        backgroundPosition: "center", // центрування зображення
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        flexShrink: 1,
        flexGrow: 1,
        height:"128px",
        width: "100%",
        maxWidth:"100px",
        border: `3.61px solid ${borderColor}`,
        fontSize: "36px",
      }}
    >

      {children}
    </div>
  );
};


export const Chevron: React.FC<{backgroundColor:string, boxColor:string,}> = ({backgroundColor,boxColor, ...props}) => {
    return  ( 
        <>
            <ChevronLeft
                    {...props}
                    size={20}
                    style={{
                        backgroundColor: backgroundColor,
                        boxShadow: `0px 0px ${boxColor} 5px 0px`, 
            }} />
        </>
    )
}  
export interface ICardBlock {
    children: ReactNode;
    src: string;
    borderColor: string
    isUserCardBlockMarkerExists:boolean;
    gradient:string;
    width:string

}
export const CardBlock: React.FC<ICardBlock> = ({width, children, src, borderColor, isUserCardBlockMarkerExists,gradient , ...props}) => {
    return  ( 
        <>
            <div  
                {...props}
                style = {{
                    backgroundImage: src,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: `2px solid  ${borderColor}`,
                    flexShrink: 1,
                    flexGrow: 1,
                    display: "flex",          
                    width:width        
                }}
            >   
            {isUserCardBlockMarkerExists &&  <CardBlockUserMarker gradient={gradient}/>}
                {children} 
            </div>
        </>
    )
}

export const CardBlockUserMarker:React.FC<{gradient:string}> = (gradient,) => {

    return ( 
        <> 
            <div style={{
                display: "flex",
                backgroundImage: `url(${gradient})`,
                padding:"20px 20px",
                height:"20%"
            }}>
                    <div style={{
                        width:"100%",
                        height:"4px",
                        borderRadius:"20px",
                        backgroundColor:"rgba(255, 255, 255, 1)",
                        
                    }}/>
                </div> 
        </>
    )
}

export const CardBottomPart: React.FC<{src:string, children: ReactNode, isHorizontal: boolean }> = ({src,children,isHorizontal,...props}) => {

    return  ( 
        <div 
            style={{
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent:'center',
                alignItems:"center",
                width: "100%",
                height: "80%",
                fontSize: "25px", 
                writingMode: isHorizontal ? "horizontal-tb" :"vertical-lr",
                
            }}

            {...props}
        >
            {children}
          </div>    
    )
     
} 


