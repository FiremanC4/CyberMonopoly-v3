"use client"
import { ReactNode, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Input } from "./play-modal";

export function ModalBlockWrapper({children}:{children:ReactNode}) {
    return ( 
     
        <div
            style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            WebkitBackdropFilter: "blur(15px)",
            justifyContent: "center",
            alignItems: "center",
         }}
        >
            {children}
        </div>
    )
}

export function MiniModal({
  isInput = false,
  borderColor,
  src,
  backgroundImage,
  width,
  height,
  description,
  children
}: {
  backgroundImage: string;
  borderColor: string;
  width: number;
  height: number;
  description: string;
  src: string;
  children?: ReactNode,
  isInput:boolean,
}) {

  const [price, setPrice] = useState<number | string>(0);

  return (
    <>
      <div
        style={{
          maxWidth: "738px",
          flexShrink: 1,
          flexGrow: 1,
          borderRadius: "20px",
          border: `1px solid ${borderColor}`,
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          paddingTop: "45px",
          paddingBottom: "45px",
          justifyContent: "center",
          backgroundImage: backgroundImage,
          backdropFilter: "blur(30px)",
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.15)", 
        }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt="card-modal-description"
        />
        <span
          style={{
            display:"flex",
            flexWrap:"wrap",
            fontSize: "32px",
            color: "white",
            maxWidth:"400px",
            justifyContent:"center",
            textAlignLast:"center"
          }}
        >
          {description}
        </span> 

          {isInput &&   
            <Input
              type="text"
              placeholder="Enter your nick name..."
              onChange={(e) => setPrice(e.target.value)}
              maxLength={20}
          />          
          }
        {children}
      </div>
    </>
  );
}

export function ButtonBlock({ width = "222px", height = "55px" }) {
  return (
    <div
      style={{
        margin: "auto",
        flexBasis: "474px",
        flexGrow: 1,
        flexShrink: 1,
        display: "flex",
        justifyContent: "start",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          color: "white",
          maxHeight: height,
          maxWidth: width,
          padding: "4px 16px",
          borderRadius: "0.375rem",
          fontWeight: 600,
          transitionProperty: "all",
          transitionDuration: "300ms",
          backgroundImage:
            "linear-gradient(to bottom, rgba(236,31,144,1) 70%, rgba(134,18,82,1))",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "20px",
        }}
      >
        Buy
      </Button>
      
      <Button
        style={{
          color: "white",
          maxHeight: height,
          maxWidth: width,
          padding: "4px 16px",
          borderRadius: "0.375rem",
          fontWeight: 600,
          transitionProperty: "all",
          transitionDuration: "300ms",
          backgroundImage:
            "linear-gradient(to bottom, rgba(236,31,144,1) 70%, rgba(134,18,82,1))",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "20px",
        }}
      >
        Auction
      </Button>
    </div>
  );
}




