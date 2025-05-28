import { create } from "zustand";

interface ClickPoint {
  x: number;
  y: number;
}

interface DashBoardCoords {
  top: number | null;
  left: number | null;
  right: number | null;
  bottom: number | null;
}

interface IUseGameLogicStore {
  dashBoardCords: DashBoardCoords;
  setDashBoardCords: (coords: DashBoardCoords) => void;
  lastClicks: ClickPoint[];
  showCords: (event: MouseEvent, isRightToLeft?: boolean) => void;
  calculateDistance: () => number | null;
  resetClicks: () => void;
  getCardIndexByClick: (x: number, isRightToLeft?: boolean) => number | null;
}

export const useGameLogicStore = create<IUseGameLogicStore>((set, get) => ({
  dashBoardCords: {
    top: null,
    left: null,
    right: null,
    bottom: null,
  },

  lastClicks: [],

  setDashBoardCords: (coords: DashBoardCoords) => set({ dashBoardCords: coords }),

  showCords: (event: MouseEvent, isRightToLeft = false) => {
    const { lastClicks, getCardIndexByClick } = get();
    const newClick = { x: event.clientX, y: event.clientY };

    const updatedClicks = [...lastClicks, newClick].slice(-2);
    set({ lastClicks: updatedClicks });

    const cardIndex = getCardIndexByClick(event.clientX, isRightToLeft);
    if (cardIndex !== null) {
      alert(`Card index clicked: ${cardIndex}`);
    } else {
      alert("Clicked outside of cards.");
    }

    if (updatedClicks.length === 2) {
      const distance = get().calculateDistance();
      alert(`Distance between clicks: ${distance?.toFixed(2)} pixels`);
      get().resetClicks();
    }
  },

  calculateDistance: () => {
    const { lastClicks } = get();
    if (lastClicks.length !== 2) return null;

    const [point1, point2] = lastClicks;
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;

    return Math.sqrt(dx * dx + dy * dy);
  },

  resetClicks: () => set({ lastClicks: [] }),

  getCardIndexByClick: (x: number, isRightToLeft = false) => {
    const { dashBoardCords } = get();
    const containerLeft = dashBoardCords.left;
    const containerRight = dashBoardCords.right;
    if (containerLeft === null || containerRight === null) return null;

    const leftPadding = 10;
    const rightPadding = 30;
    const firstCardWidth = 80;
    const lastCardWidth = 80;
    const middleCardWidth = 50;
    const totalCards = 11;

    if (!isRightToLeft) {
      // Нумерація зліва направо, індекси 1..11
      const relativeX = x - containerLeft;
      let currentX = leftPadding;

      if (relativeX >= currentX && relativeX < currentX + firstCardWidth) return 1;
      currentX += firstCardWidth;

      for (let i = 2; i <= 10; i++) {
        if (relativeX >= currentX && relativeX < currentX + middleCardWidth) {
          return i;
        }
        currentX += middleCardWidth;
      }

      if (relativeX >= currentX && relativeX < currentX + lastCardWidth) return 11;

      return null;
    } else {
      // Нумерація справа наліво, індекси 11..1
      const relativeXFromRight = containerRight - x;
      let currentX = rightPadding;

      if (relativeXFromRight >= currentX && relativeXFromRight < currentX + lastCardWidth) return 1; // права карточка — індекс 1
      currentX += lastCardWidth;

      for (let i = 2; i <= 10; i++) {
        if (relativeXFromRight >= currentX && relativeXFromRight < currentX + middleCardWidth) {
          return i;
        }
        currentX += middleCardWidth;
      }

      if (relativeXFromRight >= currentX && relativeXFromRight < currentX + firstCardWidth) return 11; // ліва карточка — індекс 11

      return null;
    }
  },
}));
