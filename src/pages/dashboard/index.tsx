import { GamePanel } from "@/modules/layout/main-page/dashboard-user"
import Image from "next/image"

export default function Dash() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        minHeight: "100vh",
        padding: "50px 10vw",
        backgroundColor: "black",
        gap: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "60vw",
          aspectRatio: "1 / 1",
          backgroundColor: "blue",
        }}
      >
        <Image
          src="/slogan-modals/Board%20(1).svg"
          alt="Board"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </main>
  )
} 