interface BoardObject {
  name: string;
  cost?: number; // Не всі клітинки мають вартість
  type: "property" | "event" | "start" | "prison" | "special";
}

export const boardObjects: BoardObject[] = [
  { name: "PRISON", type: "prison" },
  { name: "Underground VR Hub", cost: 100, type: "property" },
  { name: "Pawnshop", cost: 100, type: "property" },
  { name: "CHARGE", type: "event" },
  { name: "Garage", cost: 100, type: "property" },
  { name: "Robohack Equipment Center", cost: 150, type: "property" },
  { name: "Quantum Lift", cost: 100, type: "property" },
  { name: "Personality Factory", cost: 150, type: "property" },
  { name: "PUBLIC FUND", type: "event" },
  { name: "Shadow Courier", cost: 100, type: "property" },
  { name: "START", cost: 200, type: "start" }
];
