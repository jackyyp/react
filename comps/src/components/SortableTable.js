import Table from "./Table";

import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";

import useSort from "../hooks/use-sort"; //hook

function SortableTable(props) {
  const { config, data } = props; //array destructuring
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ), // add a header if that config has sortValue
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <TiArrowUnsorted />;
  }

  if (sortOrder === null) {
    return <TiArrowUnsorted />;
  } else if (sortOrder === "asc") {
    return <TiArrowSortedUp />;
  } else if (sortOrder === "desc") {
    return <TiArrowSortedDown />;
  }
}

export default SortableTable;
