import Image from "next/image";
import { create } from "zustand";

interface IUseChoseColorDataStore {
  isOnDashboard: boolean;
  selectedColor: string | null;
  setOnDashBoardTrue: () => void;
  setOnDashBoardFalse: () => void;
  setSelectedColor: (color: string) => void;
}

export const useChoseColorStore = create<IUseChoseColorDataStore>((set) => ({
  isOnDashboard: true,
  selectedColor: null,
  setOnDashBoardTrue: () => set({ isOnDashboard: true }),
  setOnDashBoardFalse: () => set({ isOnDashboard: false }),
  setSelectedColor: (color) => set({ selectedColor: color }),
}));

export default function ChooseColor() {
  const isOnDashboard = useChoseColorStore((state) => state.isOnDashboard);
  const setOnDashBoardFalse = useChoseColorStore((state) => state.setOnDashBoardFalse);
  const setSelectedColor = useChoseColorStore((state) => state.setSelectedColor);

  // При кліку на колір — вибираємо колір + закриваємо модалку
  function handleSelectColor(color: string) {
    setSelectedColor(color);
    setOnDashBoardFalse();
  }

  return (
    <>
      {isOnDashboard && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src="/Choose your color.png" alt="Choose your color" width={539} height={77} />
            </div>

            <div style={paletteStyle}>
              <div style={rowStyle}>
                <Circle
                  onClick={() =>
                    handleSelectColor(
                      "linear-gradient(to bottom, rgba(251, 166, 211, 1), rgba(149, 99, 125, 1))"
                    )
                  }
                  color="linear-gradient(to bottom, rgba(251, 166, 211, 1), rgba(149, 99, 125, 1))"
                  boxShadow="rgba(236, 31, 144, 0.2)"
                />
                <Circle
                  onClick={() =>
                    handleSelectColor(
                      "linear-gradient(to bottom, rgba(123, 62, 201, 1), rgba(61, 30, 99, 1))"
                    )
                  }
                  color="linear-gradient(to bottom, rgba(123, 62, 201, 1), rgba(61, 30, 99, 1))"
                  boxShadow="rgba(123, 62, 201, 0.2)"
                />
                <Circle
                  onClick={() =>
                    handleSelectColor(
                      "linear-gradient(to bottom, rgba(236, 31, 144, 1), rgba(134, 18, 82, 1))"
                    )
                  }
                  color="linear-gradient(to bottom, rgba(236, 31, 144, 1), rgba(134, 18, 82, 1))"
                  boxShadow="rgba(251, 166, 211, 0.2)"
                />
              </div>
              <div style={rowStyle}>
                <Circle
                  onClick={() =>
                    handleSelectColor(
                      "linear-gradient(to bottom, rgba(68, 79, 178, 1), rgba(29, 34, 76, 1))"
                    )
                  }
                  color="linear-gradient(to bottom, rgba(68, 79, 178, 1), rgba(29, 34, 76, 1))"
                  boxShadow="rgba(68, 79, 178, 0.2)"
                />
                <Circle
                  onClick={() =>
                    handleSelectColor(
                      "linear-gradient(to bottom, rgba(106, 254, 253, 1), rgba(53, 127, 126, 1))"
                    )
                  }
                  color="linear-gradient(to bottom, rgba(106, 254, 253, 1), rgba(53, 127, 126, 1))"
                  boxShadow="rgba(106, 254, 253, 0.2)"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface CircleProps {
  color: string;
  boxShadow: string;
  onClick: () => void;
}

export function Circle({ color, boxShadow, onClick }: CircleProps) {
  return (
    <div
      style={{
        backgroundImage: color,
        width: "59px",
        height: "59px",
        borderRadius: "50%",
        boxShadow: `6.72px 6.72px 20.15px ${boxShadow}`,
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

// Стилі твої — залишаю без змін
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  maxWidth: "656px",
  width: "90%",

  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  backdropFilter: "blur(50px)",
  WebkitBackdropFilter: "blur(50px)",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  padding: "40px",
};

const paletteStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  padding: "0",
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  padding: "0px",
  margin: "0px",
};
