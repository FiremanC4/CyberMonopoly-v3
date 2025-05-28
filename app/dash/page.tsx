"use client"

import { GamePanel } from "@/modules/layout/main-page/dashboard-user"
import { useGameLogicStore } from "@/main-store/use-game-logic-store"
import { useEffect, useRef } from "react"
import ChooseColor from "@/ai-assistent/claude/choose-your-color"


export default function Dash() {
  const setDashBoardCords = useGameLogicStore(state => state.setDashBoardCords)
  const showCords = useGameLogicStore(state => state.showCords)
  const mapCord = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mapCord.current) {
      const rect = mapCord.current.getBoundingClientRect()
      setDashBoardCords({
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
      })
    }
  }, [setDashBoardCords])

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
        onClick={(e: React.MouseEvent<HTMLDivElement>) => showCords(e.nativeEvent, true)} // true - нумерація справа наліво
        ref={mapCord}
        style={{
          position: "relative",
          width: "60vw",
          aspectRatio: "1 / 1",
          // border: "2px solid blue",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url(slogan-modals/Board.svg)",
        }}
      />
      <GamePanel />
      <ChooseColor/>
    </main>
  )
}
