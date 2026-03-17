import React from "react";
import type { ColumnDef, TableData } from "../../types/table";

interface TableBodyProps<T extends TableData> {
  data: T[];
  columns: ColumnDef<T>[];
  showCheckboxes: boolean;
  selectedRows: Set<string | number>;
  onRowClick?: (item: T) => void;
  onToggleSelection: (id: string | number) => void;
  isLoading?: boolean;
  skeletonRows?: number;
}

const TableBody = <T extends TableData>({
  data,
  columns,
  showCheckboxes,
  selectedRows,
  onRowClick,
  onToggleSelection,
  isLoading = false, // Default to false
  skeletonRows = 5, // Default to 5 skeleton rows
}: TableBodyProps<T>) => {
  // Show skeleton loader when loading
  if (isLoading) {
    return (
      <tbody className="bg-white divide-y divide-gray-100">
        {Array.from({ length: skeletonRows }).map((_, index) => (
          <tr key={`skeleton-${index}`} className="animate-pulse">
            {showCheckboxes && (
              <td className="px-4 py-4">
                <div className="h-5 w-5 rounded-[5px] bg-gray-200"></div>
              </td>
            )}
            {columns.map((column, colIndex) => (
              <td key={`skeleton-col-${colIndex}`} className="px-4 py-4">
                <div
                  className={`h-4 bg-gray-200 rounded ${
                    // Make first column slightly wider
                    colIndex === 0 ? "w-32" : "w-24"
                  }`}
                ></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td
            colSpan={columns.length + (showCheckboxes ? 1 : 0)}
            className="px-6 py-12 text-center"
          >
            <div className="flex flex-col items-center justify-center text-text-tertiary">
              <img
                src="/assets/empty-state.svg"
                alt="No data"
                className="h-24 w-24 mb-4"
              />
              <p className="text-lg font-medium">No details found</p>
              <p className="text-sm">Try adjusting your search or filters</p>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="bg-white">
      {data.map((item) => (
        <tr
          key={item.id}
          className={`border border-transparent hover:bg-alt even:bg-default whitespace-nowrap ${
            onRowClick ? "cursor-pointer" : ""
          } ${selectedRows.has(item.id) ? "bg-alt" : ""}`}
        >
          {showCheckboxes && (
            <td className="px-3 py-2 whitespace-nowrap">
              <label className="relative inline-flex h-5 w-5 cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={selectedRows.has(item.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    onToggleSelection(item.id);
                  }}
                />
                <span
                  className="h-5 w-5 rounded-[5px] border border-gray-400 bg-white
                       peer-checked:border-primary-900 peer-checked:bg-primary-900
                      "
                />
                <svg
                  className="pointer-events-none absolute left-0 top-0 h-5 w-5
                    scale-0 text-white peer-checked:scale-100 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </label>
            </td>
          )}

          {columns.map((column) => (
            <td
              key={String(column.key)}
              className={`px-3 py-2 ${column.className || ""}`}
            >
              {column.cell ? (
                column.cell(item)
              ) : (
                <div className="text-sm text-text-secondary">
                  {item[column.key as keyof T] as React.ReactNode}
                </div>
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
