interface TableHeaderProps<T> {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterChange: (key: string, value: any) => void;
  onClearFilters: () => void;
  totalItems: number;
}

const TableHeader = <T,>({
  searchQuery,
  onSearchChange,
  onFilterChange,
  onClearFilters,
  totalItems,
}: TableHeaderProps<T>) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 px-4 ">
      <div className="flex items-center gap-4 text-text-primary">
        <h2 className="text-lg font-bold leading-[26px]">Contacts</h2>
        <p className="text-sm text-gray-600 leading-[100%]">{totalItems}</p>
      </div>

      {/* <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"> */}
      {/* Search */}
      {/* <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img
              src={getImageSrc("search.svg")}
              alt="Search"
              className="h-4 w-4 text-gray-400"
            />
          </div>
          <input
            type="text"
            placeholder="Search contacts..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div> */}

      {/* Filter Button */}
      {/* <button
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
          onClick={() => onFilterChange("status", "Active")}
        >
          <img
            src={getImageSrc("filter.svg")}
            alt="Filter"
            className="h-4 w-4"
          />
          Filter
        </button> */}

      {/* Export Button */}
      {/* <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 flex items-center gap-2">
          <img
            src={getImageSrc("export.svg")}
            alt="Export"
            className="h-4 w-4"
          />
          Export
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default TableHeader;
