import React from 'react';

const Pagination = ({ curPage, goPrev, goNext, totalItems, itemsPrePage }) => {
  const noLess = curPage > 1;
  const noMore = totalItems / curPage > itemsPrePage;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!noLess}>
        {noLess && '←'}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button className="btn" onClick={goNext} disabled={!noMore}>
        {noMore && '→'}
      </button>
    </div>
  );
};

export default Pagination;
