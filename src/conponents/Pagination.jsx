import React from "react";

const Pagination = ({ paginate, postPerPage, currentPage, totalPost }) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalPost / postPerPage) },
    (_, index) => index + 1
  );
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => {
          return (
            <li key={page} className="page-item">
              <a
                onClick={() => paginate(page)}
                href="##"
                className={`page-link ${
                  currentPage === page ? "active-page" : ""
                }`}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
