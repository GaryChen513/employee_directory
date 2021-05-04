import React from "react";

const TableHeader = (props) => {
  const raiseSort = (path) => {
    const { sortColumn, handleSort } = props;

    let order = sortColumn.order;

    if (sortColumn.path === path) {
      order = sortColumn.order === "asc" ? "desc" : "asc";
    }

    const column = {
      path: path,
      order: order || sortColumn.order,
    };

    handleSort(column);
  };

  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Pic</th>
        <th
          scope="col"
          className="clickable"
          onClick={() => raiseSort("name.first")}
        >
          Name
        </th>
        <th
          scope="col"
          className="clickable"
          onClick={() => raiseSort("dob.age")}
        >
          Age
        </th>
        <th scope="col">Email</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
