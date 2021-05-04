import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Pagination from "../Pagination/index";
import _ from "lodash";
import TableHeader from "../TableHeader/index";

const Table = (props) => {
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    path: "",
    order: "asc",
  });

  useEffect(() => {
    API.getUsers().then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  const handleSort = (column) => {
    setSortColumn(column);
  };

  const handlePageChange = (p) => {
    if (p === "prev") {
      setCurrentPage(currentPage - 1);
      return;
    }
    if (p === "next") {
      setCurrentPage(currentPage + 1);
      return;
    }
    setCurrentPage(p);
  };

  const makePageRows = (arr) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex =
      currentPage * pageSize < users.length
        ? currentPage * pageSize
        : users.length;

    return arr.slice(startIndex, endIndex);
  };

  const filteredUsers = users.filter((user) =>
    user.name.first.includes(props.keyword)
  );
  const sortedUsers = _.orderBy(
    filteredUsers,
    [sortColumn.path],
    [sortColumn.order]
  );
  const page_users = makePageRows(sortedUsers);

  return (
    <React.Fragment>
      <Pagination
        users={sortedUsers}
        currentPage={currentPage}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
      />
      <table className="table table-striped">
        <TableHeader handleSort={handleSort} sortColumn={sortColumn} />
        <tbody>
          {page_users.map((user, i) => {
            return (
              <tr key={user.login.uuid}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    src={user.picture.medium}
                    alt={"profile image for" + user.name.first}
                  />
                </td>
                <td>{user.name.first + " " + user.name.last}</td>
                <td>{user.dob.age}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
