export interface TableData {
  id: string | number;
  [key: string]: any;
}

export interface ColumnDef<T extends TableData> {
  key: keyof T | string;
  header: string;
  cell?: (item: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  className?: string;
}

export interface TableState<T extends TableData> {
  data: T[];
  columns: ColumnDef<T>[];
  sortBy: keyof T | null;
  sortOrder: "asc" | "desc";
  currentPage: number;
  pageSize: number;
  selectedRows: Set<string | number>;
  searchQuery: string;
  filters: Record<string, any>;
}

export interface TableActions<T extends TableData> {
  setData: (data: T[]) => void;
  setColumns: (columns: ColumnDef<T>[]) => void;
  sortByColumn: (columnKey: keyof T) => void;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
  toggleRowSelection: (id: string | number) => void;
  selectAllRows: () => void;
  clearSelection: () => void;
  setSearchQuery: (query: string) => void;
  setFilter: (key: string, value: any) => void;
  clearFilters: () => void;
}
