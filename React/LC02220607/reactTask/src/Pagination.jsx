// put onClick for each btn
// make condition by onClick is disable for each btn
// ← able click if num of current page more then 1
// → able click if totalItems div the num of current page no more  then itemsPrePage
// hide arrow if status is disabled
//

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
