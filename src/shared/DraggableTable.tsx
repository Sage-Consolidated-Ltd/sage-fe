import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTableStore, type TableItem } from "../store/tablesStore";

export interface Column<T> {
  key: keyof T;
  header: string;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DraggableTableManualProps<T extends TableItem> {
  columns: Column<T>[];
  data: T[];
  onReorder?: (items: T[]) => void;
  className?: string;
}

const DraggableTable = <T extends TableItem>({
  columns,
  data,
  onReorder,
  className = "",
}: DraggableTableManualProps<T>) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const { items, setItems, reorderItems } = useTableStore();

  React.useEffect(() => {
    setItems(data);
  }, [data, setItems]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (index: number) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      reorderItems(draggedIndex, index);
      const newOrder = [...items];
      const [removed] = newOrder.splice(draggedIndex, 1);
      newOrder.splice(index, 0, removed);
      onReorder?.(newOrder as T[]);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-[9px] text-left text-sm font-medium text-text-primary capitalize tracking-wider w-16"></th>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-6 py-[9px] text-left text-sm font-medium text-text-primary capitalize tracking-wider ${
                  column.width ? column.width : ""
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-white">
          {items.map((item, index) => (
            <motion.tr
              key={item.id}
              layout
              initial={false}
              animate={{
                backgroundColor:
                  index === dragOverIndex ? "rgba(59, 130, 246, 0.1)" : "",
              }}
              className={`transition-colors hover:bg-alt even:bg-default ${
                index === draggedIndex ? "opacity-50" : ""
              }`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
            >
              <td className="px-3 py-[15px] whitespace-nowrap">
                <motion.div
                  className="cursor-grab active:cursor-grabbing"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                </motion.div>
              </td>

              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-[15px] whitespace-nowrap text-sm text-text-secondary"
                >
                  {column.render
                    ? column.render((item as T)[column.key], item as T)
                    : String((item as T)[column.key] || "")}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DraggableTable;
