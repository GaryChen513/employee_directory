import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { currentPage, pageSize, users } = props;
  const totalPages = Math.ceil(users.length / pageSize);

  const setPaginationIndex = (cur) => {
    let start = 1;
    let end = totalPages;

    if (totalPages <= 10) {
      return [start, end];
    }

    if (cur <= 6) {
      start = 1;
      end = 10;
    } else if (cur + 4 >= totalPages) {
      start = totalPages - 9;
      end = totalPages;
    } else {
      start = cur - 5;
      end = cur + 4;
    }

    return [start, end];
  };

  const [startIndex, endIndex] = setPaginationIndex(currentPage);

  return (
    <ul className="pagination justify-content-center">
      <li className={currentPage === 1 ? "page-item disabled" : "page-item "}>
        <button className="page-link" onClick={() => props.handlePageChange(1)}>
          First
        </button>
      </li>
      <li className={currentPage === 1 ? "page-item disabled" : "page-item "}>
        <button
          className="page-link"
          onClick={() => props.handlePageChange("prev")}
        >
          Previous
        </button>
      </li>

      {_.range(startIndex, endIndex + 1).map((page) => {
        return (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button
              className="page-link"
              onClick={() => props.handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        );
      })}

      <li
        className={
          currentPage === totalPages ? "page-item disabled" : "page-item "
        }
      >
        <button
          className="page-link"
          onClick={() => props.handlePageChange("next")}
        >
          Next
        </button>
      </li>

      <li
        className={
          currentPage === totalPages ? "page-item disabled" : "page-item "
        }
      >
        <button
          className="page-link"
          onClick={() => props.handlePageChange(totalPages)}
        >
          Last
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
