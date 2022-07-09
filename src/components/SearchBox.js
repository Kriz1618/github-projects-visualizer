import React from "react";

const SearchBox = ({
  totalCount,
  pageCount,
  queryString,
  onTotalChange,
  onQueryChange,
}) => {
  return (
    <div className="d-flex align-items-center bg-light px-3 py-2 small rounded-3">
      <div className="d-flex align-items-center flex-grow-1">
        <label htmlFor="queryString" className="me-2 fw-bold text-secondary">
          Search
        </label>
        <input
          id="queryString"
          className="form-control form-control-sm me-2"
          type="text"
          value={queryString}
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center">
        <label htmlFor="pageCount" className="me-2 fw-bold text-secondary">
          Show
        </label>
        <input
          id="pageCount"
          className="form-control form-control-sm text-center me-2"
          type="number"
          min="1"
          max="100"
          value={pageCount}
          onChange={(event) => {
            onTotalChange(event.target.value);
          }}
        />
      </div>
      <div>
        <b className="me-2 text-secondary">Total:</b>
        {totalCount}
      </div>
      {/* <div className="dropdown">
        <button
          className="btn btn-secondary drodown-toggle"
          type="button"
          id="sortBtn"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort By
        </button>
        <div  className="dropdown-menu" aria-labelledby="sortBtn">
          <a className="dropdown-item" href="/#">Older</a>
          <a className="dropdown-item" href="/#">Lastest</a>
        </div >
        <ul className="dropdown-menu" aria-labelledby="sortBtn">
          <li className="dropdown-item">Older</li>
          <li className="dropdown-item">Lastest</li>
        </ul>
      </div> */}
    </div>
  );
};

export default SearchBox;
