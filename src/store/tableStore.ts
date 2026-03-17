// store/tableStore.ts
import { create } from "zustand";
import type { ColumnDef } from "./tableStore";
import type { TableActions, TableData, TableState } from "../types/table";

const createTableStore = <T extends TableData>(initialData?: {
  data: T[];
  columns: ColumnDef<T>[];
  pageSize?: number;
}) =>
  create<TableState<T> & TableActions<T>>((set, get) => ({
    // Initial state
    data: initialData?.data || [],
    columns: initialData?.columns || [],
    sortBy: null,
    sortOrder: "asc",
    currentPage: 1,
    pageSize: initialData?.pageSize || 10,
    selectedRows: new Set(),
    searchQuery: "",
    filters: {},

    // Actions
    setData: (data) => {
      set({ data });
    },

    setColumns: (columns) => {
      set({ columns });
    },

    sortByColumn: (columnKey) =>
      set((state) => ({
        sortBy: columnKey,
        sortOrder:
          state.sortBy === columnKey && state.sortOrder === "asc"
            ? "desc"
            : "asc",
      })),

    setCurrentPage: (page) => set({ currentPage: page }),

    setPageSize: (size) => set({ pageSize: size, currentPage: 1 }),

    toggleRowSelection: (id) =>
      set((state) => {
        const newSelected = new Set(state.selectedRows);
        if (newSelected.has(id)) {
          newSelected.delete(id);
        } else {
          newSelected.add(id);
        }
        return { selectedRows: newSelected };
      }),

    selectAllRows: () =>
      set(() => {
        const state = get();
        const filteredData = getFilteredAndSortedData(state);
        const allIds = new Set(filteredData.map((item) => item.id));
        return { selectedRows: allIds };
      }),

    clearSelection: () => set({ selectedRows: new Set() }),

    setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),

    setFilter: (key, value) =>
      set((state) => ({
        filters: { ...state.filters, [key]: value },
        currentPage: 1,
      })),

    clearFilters: () => set({ filters: {}, searchQuery: "", currentPage: 1 }),
  }));

// Helper function to get filtered and sorted data
const getFilteredAndSortedData = <T extends TableData>(
  state: TableState<T>
): T[] => {
  let filtered = [...state.data];

  // Apply search
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filtered = filtered.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
  }

  // Apply filters
  Object.entries(state.filters).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      filtered = filtered.filter((item) => item[key] === value);
    }
  });

  // Apply sorting
  if (state.sortBy) {
    filtered.sort((a, b) => {
      const aValue = a[state.sortBy as keyof T];
      const bValue = b[state.sortBy as keyof T];

      if (aValue < bValue) return state.sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return state.sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }

  return filtered;
};

export { createTableStore, getFilteredAndSortedData };

// Type for ColumnDef
export type { ColumnDef } from "../types/table";
