import { create } from "zustand";

export interface TableItem {
  id: string;
  [key: string]: any;
}

interface TableState {
  items: TableItem[];
  setItems: (items: TableItem[]) => void;
  reorderItems: (startIndex: number, endIndex: number) => void;
}

export const useTableStore = create<TableState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  reorderItems: (startIndex, endIndex) =>
    set((state) => {
      const result = Array.from(state.items);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return { items: result };
    }),
}));
