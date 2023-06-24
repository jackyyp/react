import { Fragment } from "react";

function Table({ keyFn, data, config }) {
  const renderedRow = data.map((rowData) => {
    const renderedCell = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCell}
      </tr>
    );
  });

  const renderedHeader = config.map((column) => {
    if (column.header) {
      // whether it is defined ( has a sortValue as in SortableTable.js)
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeader}</tr>
      </thead>
      <tbody>{renderedRow}</tbody>
    </table>
  );
}

export default Table;
