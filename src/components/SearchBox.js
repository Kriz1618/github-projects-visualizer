import { useState, useEffect } from 'react';

const SearchBox = ({
  totalCount,
  pageCount,
  queryString,
  onTotalChange,
  onQueryChange,
  onOrderBy,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [order, setOrder] = useState(false);
  const [sortOp, setSortOp] = useState('updated');

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSort = () => {
    setOrder(!order);
  };

  const handleSortBy = (option) => {
    setSortOp(option);
  };

  useEffect(() => {
    onOrderBy(`${sortOp}-${order ? 'asc' : 'desc'}`);
  }, [sortOp, order, onOrderBy])
  
  return (
    <div className='d-flex align-items-center bg-light px-3 mx-3 py-2 small rounded-6 shadow p-3 mb-5'>
      <div className='d-flex align-items-center flex-grow-1'>
        <label htmlFor='queryString' className='me-2 fw-bold text-secondary'>
          Search
        </label>
        <input
          id='queryString'
          className='form-control form-control-sm me-2 rounded-3'
          type='text'
          value={queryString}
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
        />
      </div>
      <div className='d-flex align-items-center'>
        <label htmlFor='pageCount' className='me-2 fw-bold text-secondary'>
          Show
        </label>
        <input
          id='pageCount'
          className='form-control form-control-sm text-center me-2'
          type='number'
          min='1'
          max='100'
          value={pageCount}
          onChange={(event) => {
            onTotalChange(event.target.value);
          }}
        />
      </div>
      <div>
        <b className='me-2 text-secondary'>Total:</b>
        {totalCount}
      </div>
      <div className='dropdown ps-2' onBlur={() => setShowMenu(false)}>
        <button 
          className='btn btn-secondary btn-sm dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='true'
          onClick={handleShowMenu}
        >
          Sort By
        </button>
        <ul className={`dropdown-menu `}>
          <li className='dropdown-item fst-italic' role='button' onClick={() => handleSortBy('name')}>Name</li>
          <li className='dropdown-item fst-italic' role='button' onClick={() => handleSortBy('created')}>Created At</li>
          <li className='dropdown-item fst-italic' role='button' onClick={() => handleSortBy('updated')}>Update At</li>
        </ul>
      </div>
      <li className={`btn bi bi-sort-${order ? 'up' : 'down-alt'} p-3`} onClick={handleSort}/>
    </div>
  );
};

export default SearchBox;
