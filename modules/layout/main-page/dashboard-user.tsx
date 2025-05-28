// imports
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { create } from "zustand";

// СТЕЙТ --------------------------------------------------
interface SectionState {
  membersOpen: boolean;
  historyOpen: boolean;
  propertiesOpen: boolean;
  toggleSection: (section: "members" | "history" | "properties" | null) => void;
  section: null | string;
}
  
const useUIStore = create<SectionState>((set) => ({
  membersOpen: true,
  historyOpen: true,
  propertiesOpen: true,
  section: null,
  toggleSection: (section) =>
    set((state) => {
      if (!section) return {};
      return {
        section,
        membersOpen: section === "members" ? !state.membersOpen : state.membersOpen,
        historyOpen: section === "history" ? !state.historyOpen : state.historyOpen,
        propertiesOpen: section === "properties" ? !state.propertiesOpen : state.propertiesOpen,
      };
    }),
}));

// КОМПОНЕНТИ --------------------------------------------------
function SectionHeader({
  title,
  isOpen,
  toggle,
  extra,
  children,
}: {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  extra?: React.ReactNode;
  children?: React.ReactNode;
}) {

  return (
    <div
      onClick={toggle}
      style={{
        display: "flex",
        flexDirection: "column",
        gap:"20px",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(227, 227, 226, 0.15)",
        padding: "12px 16px",
        borderRadius: 8,
        fontWeight: "bold",
        fontSize: 14,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 10,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent:"space-between" }}>
          <span style={{ fontSize: "26px", fontWeight: 600 }}>{title}</span>
          {extra}
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
        {isOpen ? (
          <div
            style={{
              height: 1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              marginTop: 15,
              marginBottom: 10,
              width: "100%",
            }}
          />
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function GamePanel() {
  const { membersOpen, historyOpen, propertiesOpen, toggleSection } = useUIStore();

  return (
    <div
      style={{
        background: "black",
        borderRadius: 12,
        padding: 20,
        height: "95vh",
        color: "white",
        fontFamily: "Arial",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        width: "50vw",
      }}
    >
      <div style={{ flex: 1, overflowY: "auto", paddingRight: 10, marginRight: -10 }}>
        {/* MEMBERS */}
        <div>
          <SectionHeader
            title="MEMBERS"
            isOpen={membersOpen}
            toggle={() => toggleSection("members")}
          />
          {membersOpen && (
            <>
              {[
                {
                  name: "Hacker (you)",
                  details: "2 properties • 1 property",
                  money: "1 280$",
                  color: "#e91e63",
                },
                {
                  name: "Doctor",
                  details: "1 property",
                  money: "1 400$",
                  color: "#3f51b5",
                },
                {
                  name: "Helicopter",
                  details: "0 property",
                  money: "5 000$",
                  color: "#9c27b0",
                },
              ].map(({ name, details, money, color }) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 12,
                    background: "rgba(227, 227, 226, 0.08)",
                    borderRadius: 6,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      marginRight: 12,
                      border: "2px solid",
                      borderColor: color,
                      background: color,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: "bold", marginBottom: 4 }}>{name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{details}</div>
                  </div>
                  <div style={{ fontWeight: "bold", fontSize: 14, color: "#4caf50" }}>{money}</div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* HISTORY */}
        <div>
          <SectionHeader
            title="HISTORY"
            isOpen={historyOpen}
            toggle={() => toggleSection("history")}
            extra={
              <span style={{ position:"absolute", left:"35%", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
                00:01:31
              </span>
            }
          />
          {historyOpen && (
            <>
              <div
                style={{
                  height: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  marginTop: 15,
                  marginBottom: 10,
                  width: "100%",
                }}
              />
              {[
                {
                  time: "00:00:59",
                  message: (
                    <>
                      Hacker moved to <strong>PRISON</strong>
                    </>
                  ),
                },
                {
                  time: "00:00:45",
                  message: (
                    <>
                      Doctor purchased <strong>Techno Garage</strong> for <strong>100$</strong>
                    </>
                  ),
                },
              ].map(({ time, message }, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: 10,
                    background: "rgba(227, 227, 226, 0.08)",
                    borderRadius: 6,
                    marginBottom: 6,
                    fontSize: 13,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 4 }}>{time}</div>
                  {message}
                </div>
              ))}
            </>
          )}
        </div>

        {/* PROPERTIES */}
        <div>
          <SectionHeader
            title="YOUR PROPERTIES"
            isOpen={propertiesOpen}
            toggle={() => toggleSection("properties")}
          />
          {propertiesOpen && (
            <>
              <div
                style={{
                  height: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  marginTop: 15,
                  marginBottom: 10,
                  width: "100%",
                }}
              />
              {[
                {
                  title: "Network services",
                  color: "#9c27b0",
                  items: ["Shadow courier", "Personality Factory"],
                },
                {
                  title: "Cyber Businesses",
                  color: "#9c27b0",
                  items: [],
                },
              ].map(({ title, color, items }) => (
                <div key={title} style={{ marginBottom: 15 }}>
                  <div style={{ fontWeight: "bold", marginBottom: 8, display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 2,
                        display: "inline-block",
                        marginRight: 8,
                        background: color,
                      }}
                    />
                    {title}
                  </div>
                  {items.map((name) => (
                    <div
                      key={name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.7)",
                        padding: "6px 20px",
                      }}
                    >
                      <span>{name}</span>
                      <span>No levels</span>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* END GAME BUTTON */}
      <Link href="/">
        <button
          onClick={() => alert("Game ended! Thanks for playing!")}
          style={{
            background: "rgba(236, 31, 144, 0.4)",
            color: "white",
            padding: 16,
            width: "100%",
            borderRadius: 8,
            fontSize: "30px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: 1,
            cursor: "pointer",
            border: "none",
            marginTop: 20,
            boxShadow: "0 4px 15px rgba(123, 31, 162, 0.3)",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundImage =
              "linear-gradient(to bottom, rgba(236, 31, 144, 1), rgba(134, 18, 82, 1))";
          }}
        >
          END GAME
        </button>
      </Link>
    </div>
  );
}
