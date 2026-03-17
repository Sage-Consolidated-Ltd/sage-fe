import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../utils/icons";

interface TableFooterProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const TableFooter: React.FC<TableFooterProps> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex flex-col sm:flex-row justify-end items-center gap-4 px-6 py-4 bg-white">
      <div className="text-sm text-text-primary mb-4 sm:mb-0">
        Showing results <span className="font-bold">{startItem}</span> -{" "}
        <span className="font-bold">{endItem}</span> of{" "}
        <span className="font-bold">{totalItems}</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Rows per page selector */}
        {/* <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {[5, 10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div> */}

        {/* Pagination */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button
              className=" disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
            >
              <ChevronDoubleLeftIcon />
            </button>
            <button
              className=" disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon />
            </button>
          </div>

          <div className="flex gap-1 items-center">
            <div className="text-sm text-text-primary flex items-center gap-2">
              <p>Page</p>
              <p
                className={`px-2 py-1 rounded border text-sm
          ${
            currentPage === totalPages
              ? "border-text-tertiary text-text-tertiary"
              : "text-text-primary border-text-primary"
          }`}
              >
                {currentPage}
              </p>
              of {totalPages}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              className=" disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon />
            </button>
            <button
              className=" disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronDoubleRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
